import { screen } from '@testing-library/react';
import { renderWithProviders } from '../utils/test-utils';
import App from '../App';

test('renders hello world', () => {
  renderWithProviders(<App />);
  const headerElement = screen.getByText(/hello world/i);
  expect(headerElement).toBeInTheDocument();
});
