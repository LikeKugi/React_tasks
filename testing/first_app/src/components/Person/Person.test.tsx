import { describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Person from './Person';

describe('<Person /> component tests', () => {

  afterEach(() => {
    cleanup();
  });

  it('should render Person', function () {
    const mockedName = {
      name: 'Mark'
    }
    render(<Person name={mockedName.name}/>);
    const componentString = screen.queryByText(/name/i)
    expect(componentString).toBeTruthy();
  });

  it('should render correct name', function () {
    const mockedName = 'John';
    render(<Person name={mockedName} />)
    const actualName = screen.queryByText(mockedName);
    expect(actualName).toHaveTextContent(mockedName);
  });
})
