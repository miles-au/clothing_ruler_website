import React from 'react';
import { render } from '@testing-library/react';
import App from './components/App/App';

test('renders the Klothes hero copy', () => {
  const { getByText } = render(<App />);
  expect(getByText(/The fastest way to create professional resale listings/i)).toBeInTheDocument();
});
