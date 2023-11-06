import { describe, expect, vitest } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import ButtonWrapper from './ButtonWrapper';

describe('<ButtonWrapper/> tests', () => {

  afterEach(() => {
    cleanup();
  });

  it('should render component', function () {
    render(<ButtonWrapper title="btn" />);
    const actualButton = screen.queryByText(/btn/i);
    expect(actualButton).toBeInTheDocument()
  });

  it('should handles onClick', function () {
    const onClick = vitest.fn();
    render(<ButtonWrapper title="Click me" onClick={onClick} />)
    const actualButton = screen.getByText(/click/i);
    fireEvent.click(actualButton);
    expect(onClick).toHaveBeenCalledOnce();
  });
})
