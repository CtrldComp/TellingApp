import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import FeedbackForm from './FeedbackForm';
import axios from 'axios';

jest.mock('axios');

test('submits feedback', async () => {
  const { getByText, getByPlaceholderText } = render(<FeedbackForm />);
  
  fireEvent.press(getByText('Complaint'));
  fireEvent.changeText(getByPlaceholderText('Describe your experience...'), 'Test message');
  fireEvent.press(getByText('Submit Feedback'));

  await waitFor(() => expect(axios.post).toHaveBeenCalled());
});
