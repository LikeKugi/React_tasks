import { describe, expect } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

describe('<Counter /> tests', () => {

  afterEach(() => {
    cleanup();
  });

  it('should render component', function () {
    render(<Counter />)
    const divEl = screen.getByRole('contentinfo');
    expect(divEl).toBeInTheDocument();
    const btnEl = screen.getByText(/add/i);
    expect(btnEl).toBeInTheDocument();
  });

  it('should handle focus', function () {
    render(<Counter />)
    const btnEl = screen.getByText(/add/i);
    btnEl.focus();
    expect(btnEl).toHaveFocus()
  });

  it('should trigger onClick function', function () {
    render(<Counter />)
    const btnEl = screen.getByText(/add/i);
    const divEl = screen.getByRole('contentinfo');
    expect(divEl).toHaveTextContent('Count is: 0');
    fireEvent.click(btnEl);

    expect(divEl).toHaveTextContent('Count is: 1');
  });
})
