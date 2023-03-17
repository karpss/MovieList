import { render } from '@testing-library/react';
import React from 'react';
import { describe, it, expect } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import MovieListView from '..';

describe('Movie List View', () => {
  const queryClient = new QueryClient();
  it('renders', () => {
    const wrapper = render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <MovieListView index={0} />
        </QueryClientProvider>
      </BrowserRouter>
    );
    expect(wrapper.container).toMatchSnapshot();
  });
});
