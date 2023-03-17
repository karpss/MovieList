import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import Navbar from '..';
import { useSearchBarQuery } from '../../../hooks/SearchBarContext';

describe('Navbar', () => {
  vi.mock('../../../hooks/SearchBarContext', () => ({
    useSearchBarQuery: vi.fn().mockReturnValue({ setShow: vi.fn() }),
  }));

  it('renders the Navbar component', () => {
    const { getByTestId } = render(<Navbar />);
    expect(getByTestId('Navbar')).toBeInTheDocument();
  });

  it('renders Movie List Header', () => {
    render(<Navbar />);
    const headerElement = screen.getByText(/MOVIE LIST/i);
    expect(headerElement).toBeInTheDocument();
  });

  it('toggles the search bar when the search icon is clicked', () => {
    const { getByLabelText } = render(<Navbar />);
    const searchIcon = getByLabelText('search');
    const spy = vi.spyOn(useSearchBarQuery(), 'setShow');

    fireEvent.click(searchIcon);
    waitFor(() => expect(spy).toHaveBeenCalledWith(true));
  });
});
