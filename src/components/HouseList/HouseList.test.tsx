import { render, waitFor } from '@testing-library/react';
import { axe } from 'jest-axe';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../../../jest.setup';
import { HOUSE_MOCK } from '@/test/mocks/house';
import HouseList from './HouseList';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/mock-path'),
  useSearchParams: jest.fn(() => ({
    get: jest.fn().mockReturnValue(null),
  })),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  })),
}));

describe('<HouseList />', () => {
  it('should have no obvious a11y violations', async () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <HouseList
          currentPage={1}
          initialData={{ houseData: [HOUSE_MOCK], totalPages: 0 }}
        />
      </QueryClientProvider>
    );

    await waitFor(async () => {
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
