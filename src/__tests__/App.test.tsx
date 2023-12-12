import { screen, act } from '@testing-library/react';
import { renderWithProviders } from '../utils/test-utils';
import { setupStore } from '../store';
import { fetchTVShow } from '../store/tvShowSlice';
import App from '../App';


beforeEach(() => {
  // @ts-expect-error - partial response for testing
  jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        name: "test",
        summary: "test",
        image: {
          original: "test",
          medium: "test"
        },
        _embedded: {episodes: []},
        isLoading: false,
        errorMsg: "",
      })
  })
})

afterEach(() => jest.restoreAllMocks());

describe("App", () => {
  test('renders hello world', () => {
    renderWithProviders(<App />);
    const headerElement = screen.getByText(/hello world/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('it renders response data from api call on load', async () => {
    // @ts-expect-error - partial response for testing
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        name: "Powerpuff girls",
        summary: "test",
        image: {
          original: "test",
          medium: "test"
        },
        _embedded: {episodes: []},
        isLoading: false,
        errorMsg: "",
      })
    })

    let store;

    await act(async () => {
      store = setupStore();
      await store.dispatch(fetchTVShow("powerpuff+girls"));
    })

    renderWithProviders(<App />, {store});

    const title = screen.getByText(/Powerpuff girls/i);
    expect(title).toBeInTheDocument()
  }); 
});
