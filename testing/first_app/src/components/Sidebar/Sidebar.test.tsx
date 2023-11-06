import { describe, expect } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Sidebar from './Sidebar';

const singleMockedItem = [{name: 'index', href: '/'}]

const severalMockedItems = [...singleMockedItem, {name: 'second', href: '/second'}, {name: 'third', href: '/third'}]

describe('<Sidebar /> component tests', () => {

  afterEach(() => {
    cleanup();
  });

  it('should render <Sidebar />', function () {
    render(<Sidebar items={singleMockedItem} />)
    const navElement = screen.getByRole('navigation')
    expect(navElement).toBeInTheDocument()
  });

  it('should render correct text', function () {
    render(<Sidebar items={singleMockedItem} />)
    const anchorElement = screen.queryByText(singleMockedItem[0].name);
    expect(anchorElement).toHaveTextContent(singleMockedItem[0].name)
  });

  it('should render several anchors', function () {
    render(<Sidebar items={severalMockedItems} />)
    const anchorElements = screen.getAllByRole('link');
    expect(anchorElements.length).toBe(severalMockedItems.length)
  });
})
