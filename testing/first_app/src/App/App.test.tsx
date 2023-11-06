import { screen, render, cleanup } from '@testing-library/react';
import App from './App';

describe('App', () => {

  afterEach(() => {
    cleanup();
  });

  it('Should render the page correctly', () => {
    // Setup
    render(<App />);
    const h1 = screen.queryByText('Vite + React');

    // Post Expectations
    expect(h1).toBeInTheDocument();
  });
});
