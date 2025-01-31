import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import SwornMemberList from './SwornMemberList';
import { HOUSE_MOCK } from '@/test/mocks/house';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../../../jest.setup';

describe('<SwornMemberList />', () => {
  it('should have no obvious a11y violations', async () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <SwornMemberList
          houseId={1}
          initialData={{ data: HOUSE_MOCK, swornMembersData: [] }}
        />
      </QueryClientProvider>
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
