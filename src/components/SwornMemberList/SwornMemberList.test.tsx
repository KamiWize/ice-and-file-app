import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import SwornMemberList from './SwornMemberList';
import { HOUSE_MOCK } from '@/test/mocks/house';

describe('<SwornMemberList />', () => {
  it('should have no obvious a11y violations', async () => {
    const mockData = { data: HOUSE_MOCK, swornMembersData: [] };

    const { container } = render(
      <SwornMemberList houseId={1} data={mockData} />
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
