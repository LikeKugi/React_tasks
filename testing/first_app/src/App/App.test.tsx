import { screen, render, cleanup } from '@testing-library/react';
import App from './App';

describe('App', () => {

  afterEach(() => {
    cleanup();
  });

  it('Should render the page correctly', async () => {
    // Setup
    await render(<App />);
    const h1 = await screen.queryByText('Vite + React');

    // Post Expectations
    expect(h1).toBeInTheDocument();
  });
});
