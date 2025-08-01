import { render, screen } from '@testing-library/react';
import App from './App';

test('renders one way tix website text', () => {
  render(<App />);
  const linkElement = screen.getByText(/this is the website for "one way tix"/i);
  expect(linkElement).toBeInTheDocument();
});
