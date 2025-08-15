import {
  flattenArrayRecursive,
  flattenArrayIterativeStack,
  flattenArrayIterativeQueue,
  flattenArrayNative,
} from '../flattenArray.js';

describe('flattenArrayRecursive', () => {
  test('should flatten a nested array with truthy values', () => {
    expect(flattenArrayRecursive([1, 2, [3, 4, [5, 6]], 7, [8, 9]])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });
});

describe('flattenArrayIterativeStack', () => {
  test('should flatten a nested array with random truthy & falsy values', () => {
    expect(
      flattenArrayIterativeStack([
        1,
        2,
        [3, 4, [5, 6]],
        7,
        [8, 9],
        null,
        undefined,
        0,
      ])
    ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  });
});

describe('flattenArrayIterativeQueue', () => {
  test('should flatten a nested array with random truthy, falsy and Infinity values', () => {
    expect(
      flattenArrayIterativeQueue([
        -1,
        1,
        null,
        2,
        [3, 4, [5, 6, [7, 8, 9]]],
        [-Infinity, Infinity],
      ])
    ).toEqual([-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, -Infinity, Infinity]);
  });
});

describe('flattenArrayNative', () => {
  test('should flatten a nested array with random truthy, falsy and Infinity values', () => {
    expect(
      flattenArrayNative([
        -1,
        1,
        null,
        2,
        [3, 4, [5, 6, [7, 8, 9]]],
        [-Infinity, Infinity],
      ])
    ).toEqual([-1, 1, 2, 3, 4, 5, 6, 7, 8, 9, -Infinity, Infinity]);
  });
});
