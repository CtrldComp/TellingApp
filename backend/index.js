import express from 'express';
import sqlite3 from 'sqlite3';

const app = express();
const port = 3001;

// Middleware
app.use(express.json());

// Database setup
const db = new sqlite3.Database(':memory:');

// Create tables
db.serialize(() => {
  db.run('CREATE TABLE feedback (id INTEGER PRIMARY KEY, message TEXT, type TEXT, status TEXT)');
  db.run('CREATE TABLE supervisors (id INTEGER PRIMARY KEY, name TEXT, email TEXT, password TEXT)');
});

app.get('/', (req, res) => {
  res.send('Server is running');
});

// Feedback endpoints
app.post('/api/feedback', (req, res) => {
  const { message, type } = req.body;
  
  if (!message || !type) {
    return res.status(400).json({ error: 'Message and type are required' });
  }

  db.run(
    'INSERT INTO feedback (message, type, status) VALUES (?, ?, ?)',
    [message, type, 'pending'],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to save feedback' });
      }
      res.status(201).json({ 
        id: this.lastID,
        message: 'Feedback submitted successfully' 
      });
    }
  );
});

app.get('/api/feedback', (req, res) => {
  db.all('SELECT * FROM feedback', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch feedback' });
    }
    res.json(rows);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
