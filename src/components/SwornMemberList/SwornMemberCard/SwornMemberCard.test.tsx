import { axe } from 'jest-axe';
import { render, screen } from '@testing-library/react';
import SwornMemberCard from './SwornMemberCard';
import { SWORN_MEMBER } from '@/test/mocks/swornMember';

describe('<SwornMemberCard />', () => {
  it('Should have no obvious a11y violations', async () => {
    const { container } = render(<SwornMemberCard sworn={SWORN_MEMBER} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('Renders all provided house data correctly', () => {
    render(<SwornMemberCard sworn={SWORN_MEMBER} />);

    const memberName = screen.getByText(/Lothor Brune/i);
    const memberGender = screen.getByText(/Male/i);
    const memberStatus = screen.getByText(/Alive...yet/i);

    expect(memberName).toBeInTheDocument();
    expect(memberGender).toBeInTheDocument();
    expect(memberStatus).toBeInTheDocument();
  });

  it('Displays "Unknown" when the house name is missing', () => {
    const mockData = { ...SWORN_MEMBER, name: '' };

    render(<SwornMemberCard sworn={mockData} />);

    const memberName = screen.getByText(/Unknown Sworn member/i);

    expect(memberName).toBeInTheDocument();
  });

  it('Renders the correct death status for the house and description', () => {
    const mockData = { ...SWORN_MEMBER, died: 'In 211 AC, at Whitewalls' };

    render(<SwornMemberCard sworn={mockData} />);

    const memberStatus = screen.getByText(/Death/i);
    const memberDeathData = screen.getByText(/In 211 AC, at Whitewalls/i);

    expect(memberStatus).toBeInTheDocument();
    expect(memberDeathData).toBeInTheDocument();
  });
});
