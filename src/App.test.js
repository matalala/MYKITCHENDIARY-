import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home link', () => {
  render(<App />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});

test('componente lading tenga img', () => {
  render(<App />)
  const lading =screen.getByRole('img')
  expect(lading).toBeInTheDocument()
});