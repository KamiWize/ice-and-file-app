import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
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
    const mockData = { houseData: [HOUSE_MOCK], totalPages: 0 };

    const { container } = render(<HouseList currentPage={1} data={mockData} />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
