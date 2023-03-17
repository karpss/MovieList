import { render } from '@testing-library/react';
import React from 'react';
import { describe, it, expect } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MovieDetails from '..';

describe('Movie Details', () => {
  const queryClient = new QueryClient();
  it('renders', () => {
    const wrapper = render(
      <QueryClientProvider client={queryClient}>
        <MovieDetails />
      </QueryClientProvider>
    );
    expect(wrapper.container).toMatchSnapshot();
  });
});
