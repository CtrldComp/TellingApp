import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-url.com/api', // Replace with your API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example function to submit feedback
export const submitFeedback = async (feedbackData: Record<string, unknown>) => {
  try {
    const response = await api.post('/feedback', feedbackData);
    return response.data;
  } catch (error) {
    console.error('Error submitting feedback:', error);
    throw error;
  }
};

// Add more API functions as needed

export default api;
