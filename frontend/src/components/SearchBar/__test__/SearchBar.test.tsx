import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, waitFor } from '@testing-library/react';
import SearchBar from '..';
import { useSearchBarQuery } from '../../../hooks/SearchBarContext';

describe('SearchBar', () => {
  vi.mock('../../../hooks/SearchBarContext', () => ({
    useSearchBarQuery: vi
      .fn()
      .mockReturnValue({ query: '', setQuery: vi.fn(), show: true }),
  }));

  it('renders the SearchBar component', () => {
    const { getByTestId } = render(<SearchBar />);
    expect(getByTestId('SearchBar')).toBeInTheDocument();
  });

  it('should change the query when input value changes', () => {
    const { getByTestId } = render(<SearchBar />);
    const input = getByTestId('search-input');

    const spy = vi.spyOn(useSearchBarQuery(), 'setQuery');

    fireEvent.change(input, { target: { value: 'new query' } });

    waitFor(() => expect(spy).toHaveBeenCalledWith('new query'));
  });

  it('should clear the query when clear button is clicked', () => {
    const { getByTestId } = render(<SearchBar />);
    const clearButton = getByTestId('clear-button');

    const spy = vi.spyOn(useSearchBarQuery(), 'setQuery');

    fireEvent.click(clearButton);

    waitFor(() => expect(spy).toHaveBeenCalledWith(''));
  });
});
