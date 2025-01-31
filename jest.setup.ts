import { server } from './src/test/mocks/server';
import '@testing-library/jest-dom';
import { toHaveNoViolations } from 'jest-axe';
import { QueryClient } from '@tanstack/react-query';

expect.extend(toHaveNoViolations);

// Global QueryClient instance
export let queryClient: QueryClient;

beforeAll(() => {
  server.listen();
  queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
});
afterEach(() => {
  server.resetHandlers();
  queryClient.clear();
});
afterAll(() => server.close());
