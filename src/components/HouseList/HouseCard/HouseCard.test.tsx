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
  it('should have no obvious a11y violations', async () => {
    const { container } = render(<HouseCard data={HOUSE_MOCK} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render the house data with sworn members', () => {
    render(<HouseCard data={HOUSE_MOCK} />);
    expect(screen.getByText(/House Ball/i)).toBeInTheDocument();
    expect(
      screen.getByText(/This house is bound by the oaths of 1 loyal members/i)
    ).toBeInTheDocument();
    expect(screen.getByTestId('see-more-button')).toBeEnabled();
  });

  it('should render the house data without sworn members', () => {
    render(<HouseCard data={{ ...HOUSE_MOCK, swornMembers: [] }} />);
    expect(screen.getByText(/House Ball/i)).toBeInTheDocument();
    expect(
      screen.getByText(/This house has no sworn members/i)
    ).toBeInTheDocument();
    expect(screen.getByTestId('see-more-button')).toBeDisabled();
  });
});
