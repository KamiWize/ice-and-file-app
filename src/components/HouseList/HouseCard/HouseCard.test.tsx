import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import HouseCard from './HouseCard';
import { HOUSE_MOCK } from '@/test/mocks/house';

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

describe('<HouseCard />', () => {
  it('Should have no obvious a11y violations', async () => {
    const { container } = render(<HouseCard data={HOUSE_MOCK} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Renders house name, sworn members, and enables "See More" button', () => {
    render(<HouseCard data={HOUSE_MOCK} />);

    const houseName = screen.getByText(/House Ball/i);
    const houseDescription = screen.getByText(
      /This house has 1 sworn members/i
    );
    const seeMoreBtn = screen.getByTestId('see-more-button');

    expect(houseName).toBeInTheDocument();
    expect(houseDescription).toBeInTheDocument();
    expect(seeMoreBtn).toBeEnabled();
  });

  it('Renders the house data without displaying sworn members', () => {
    const mockData = { ...HOUSE_MOCK, swornMembers: [] };

    render(<HouseCard data={mockData} />);

    const houseName = screen.getByText(/House Ball/i);
    const houseDescription = screen.getByText(
      /This house has no sworn members/i
    );
    const seeMoreBtn = screen.getByTestId('see-more-button');

    expect(houseName).toBeInTheDocument();
    expect(houseDescription).toBeInTheDocument();
    expect(seeMoreBtn).toBeDisabled();
  });
});
