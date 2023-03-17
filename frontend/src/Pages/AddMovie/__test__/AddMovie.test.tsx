import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import AddMovie from '..';

describe('Add Movie Form', () => {
  const queryClient = new QueryClient();

  it('should display Movie Name and Release Date input fields', () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AddMovie />
        </QueryClientProvider>
      </BrowserRouter>
    );

    expect(screen.getByPlaceholderText('Movie Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Release Date')).toBeInTheDocument();
  });

  it('button should not be clickable if Movie Name and Release Date input are empty', () => {
    const onClick = vi.fn();
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AddMovie />
        </QueryClientProvider>
      </BrowserRouter>
    );
    const buttonElement = screen.getByText('Create Movie');
    fireEvent.click(buttonElement);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('should enable create movie button when movie name and release date are filled with value', () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AddMovie />
        </QueryClientProvider>
      </BrowserRouter>
    );

    const movieNameValue = screen.getByPlaceholderText('Movie Name');
    const releaseDateValue = screen.getByPlaceholderText('Release Date');

    fireEvent.change(movieNameValue, { target: { value: 'Taken' } });
    expect(movieNameValue).toHaveValue('Taken');
    expect(
      screen.getByRole('button', { name: /Create Movie/i })
    ).toBeDisabled();

    fireEvent.change(releaseDateValue, { target: { value: '1994-01-22' } });
    expect(releaseDateValue).toHaveValue('1994-01-22');
    expect(screen.getByRole('button', { name: /Create Movie/i })).toBeEnabled();
  });
});
