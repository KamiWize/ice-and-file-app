import { getHouses } from './api';

describe('api', () => {
  it('should returns the correct last page', async () => {
    const response = await getHouses(1, 10);
    expect(response.totalPages).toBe(45);
  });
});
