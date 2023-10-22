import React from 'react';
import { Provider } from 'jotai';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const queryClient = new QueryClient();

export const wrapRootElement = ({ element }) => {
  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        {element}
      </QueryClientProvider>
    </Provider>
  );
};
