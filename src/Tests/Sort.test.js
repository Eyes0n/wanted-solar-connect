import { bubbleSort } from 'Utils/sort';

describe('ASC TEST', () => {
  test('ASC: 한 자릿수', () => {
    expect(bubbleSort([2, 5, 3, 1, 4], 'asc')).toEqual([1, 2, 3, 4, 5]);
  });
  test('ASC: 두 자릿수 포함', () => {
    expect(bubbleSort([1, 15, 12, 4, 11], 'asc')).toEqual([1, 4, 11, 12, 15]);
  });
  test('ASC: n 자릿수 포함', () => {
    expect(bubbleSort([1, 123, 12, 12345, 1234], 'asc')).toEqual([
      1, 12, 123, 1234, 12345,
    ]);
  });
});

describe('DESC TEST', () => {
  test('DESC: 한 자릿수', () => {
    expect(bubbleSort([2, 5, 3, 1, 4], 'desc')).toEqual([5, 4, 3, 2, 1]);
  });
  test('DESC: 두 자릿수 포함', () => {
    expect(bubbleSort([1, 15, 12, 4, 11], 'desc')).toEqual([15, 12, 11, 4, 1]);
  });
  test('DESC: n 자릿수 포함', () => {
    expect(bubbleSort([1, 123, 12, 12345, 1234], 'desc')).toEqual([
      12345, 1234, 123, 12, 1,
    ]);
  });
});
