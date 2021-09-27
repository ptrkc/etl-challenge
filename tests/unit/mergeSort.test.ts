import { mergeSort } from '../../src/utils/mergeSort';

describe('mergeSort', () => {
  it('should return a sorted list ', async () => {
    const response = mergeSort([4, 6, 2, -2, 0.9, 1]);
    expect(response).toEqual([-2, 0.9, 1, 2, 4, 6]);
  });
  it('should return asingle item array when only one item is given', async () => {
    const response = mergeSort([1]);
    expect(response).toEqual([1]);
  });
  it('should return an empty array when given an empty array', async () => {
    const response = mergeSort([]);
    expect(response).toEqual([]);
  });
});
