//Hello.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Hello from './Hello';

test('renders a greeting message', () => {
  render(<Hello name="World" />);
  const greeting = screen.getByText(/Hello, World!/i);
  expect(greeting).toBeInTheDocument();
});