import { axe } from 'jest-axe';
import { render, screen } from '@testing-library/react';
import SwornMemberCard from './SwornMemberCard';
import { SWORN_MEMBER } from '@/test/mocks/swornMember';

describe('<SwornMemberCard />', () => {
  it('should have no obvious a11y violations', async () => {
    const { container } = render(<SwornMemberCard sworn={SWORN_MEMBER} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render the correct full data', () => {
    render(<SwornMemberCard sworn={SWORN_MEMBER} />);
    expect(screen.getByText(/Lothor Brune/i)).toBeInTheDocument();
    expect(screen.getByText(/Male/i)).toBeInTheDocument();
    expect(screen.getByText(/Male/i)).toBeInTheDocument();
    expect(screen.getByText(/Alive...yet/i)).toBeInTheDocument();
  });

  it('should render an unknown name', () => {
    render(<SwornMemberCard sworn={{ ...SWORN_MEMBER, name: '' }} />);
    expect(screen.getByText(/Unknown Sworn member/i)).toBeInTheDocument();
  });

  it('should render the death status', () => {
    render(<SwornMemberCard sworn={{ ...SWORN_MEMBER, died: 'yes' }} />);
    expect(screen.getByText(/Death/i)).toBeInTheDocument();
  });

  it('should render at more one status', () => {
    render(
      <SwornMemberCard sworn={{ ...SWORN_MEMBER, titles: ['foo', 'bar'] }} />
    );
    expect(screen.getByText(/foo, bar/i)).toBeInTheDocument();
  });
});
