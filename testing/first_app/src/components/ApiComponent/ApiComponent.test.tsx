import { beforeEach, describe, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ApiComponent from './ApiComponent';
import createFetchMock from 'vitest-fetch-mock';

describe('<ApiComponent /> tests', () => {

  const fetch = createFetchMock(vi)
  fetch.enableMocks();


  beforeEach(() => {
    fetch.doMock();
  })

  it('should render', function () {
    render(<ApiComponent />);
    expect(screen.queryByText(/component/i)).toBeInTheDocument()
  });

  it('should receive data', async function () {
    fetch.mockResponseOnce(() => new Promise((resolve) => setTimeout(() => resolve(JSON.stringify({ name: 'Jack' })), 100)));
    render(<ApiComponent />)
    expect(await screen.findByText(/jack/i)).toBeInTheDocument();
    screen.debug()
  });
});
