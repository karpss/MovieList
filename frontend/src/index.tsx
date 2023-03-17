//* eslint-disable */
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SearchBarContextProvider } from './hooks/SearchBarContext';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const queryClient = new QueryClient({
  // you can change how your stale time is set up
  //
  // defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } },
});

const container = document.getElementById('app');
const root = createRoot(container as Element);
root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <SearchBarContextProvider>
        <App index={0} />
      </SearchBarContextProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </BrowserRouter>
);
