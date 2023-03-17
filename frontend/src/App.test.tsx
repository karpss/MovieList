import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  const queryClient = new QueryClient();
  it('renders the Navbar, SearchBar, AddMovie and MovieListView components', () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App index={0} />
        </QueryClientProvider>
      </BrowserRouter>
    );

    expect(screen.getByTestId('Navbar')).toBeInTheDocument();
    waitFor(() => expect(screen.getByTestId('SearchBar')).toBeInTheDocument());
    waitFor(() => expect(screen.getByTestId('AddMovie')).toBeInTheDocument());
    waitFor(() =>
      expect(screen.getByTestId('MovieListView')).toBeInTheDocument()
    );
  });

  it('renders the correct route when the add movie button is clicked', () => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App index={0} />
        </QueryClientProvider>
      </BrowserRouter>
    );

    const addMovieButton = screen.getByRole('button', { name: 'Add' });
    addMovieButton.click();

    waitFor(() => expect(screen.getByTestId('AddMovie')).toBeInTheDocument());
  });
});
