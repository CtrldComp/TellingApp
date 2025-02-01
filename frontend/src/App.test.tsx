import React from 'react';
import { render, screen } from '@testing-library/react-native';
import App from './App';
import '@testing-library/jest-native/extend-expect';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
