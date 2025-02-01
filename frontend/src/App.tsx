import React from 'react';
import FeedbackForm from './components/FeedbackForm';
import TestComponent from './components/TestComponent';
import './App.css';
import theme from './theme';

function App() {
  return (
    <div className="App" style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}>
      <FeedbackForm />
      <TestComponent />
    </div>
  );
}

export default App;
