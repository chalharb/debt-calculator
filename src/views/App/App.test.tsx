import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello World!', () => {
  render(<App />);
  const h1 = screen.getByText(/Debt Calculator/i);
  expect(h1).toBeInTheDocument();
});
