import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';
import TVShow from '../../pages/TVShow';

test('renders TV Show Page', () => {
  renderWithProviders(<TVShow />);
  const headerElement = screen.getByText(/TV Show Page/i);
  expect(headerElement).toBeInTheDocument();
});
