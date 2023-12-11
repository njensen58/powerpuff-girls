import { render, screen } from '@testing-library/react';
import TVShow from '../../pages/TVShow';

test('renders TV Show Page', () => {
  render(<TVShow />);
  const headerElement = screen.getByText(/TV Show Page/i);
  expect(headerElement).toBeInTheDocument();
});
