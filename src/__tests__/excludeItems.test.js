import { excludeItems } from '../excludeItems.js';

describe('excludeItems', () => {
  test('should return false if the input is not an array', () => {
    const array = null;
    const excludes = [{ k: 'name', v: 'John' }];
    expect(excludeItems(array, excludes)).toEqual(false);
  });
  test('should return an empty array if the input is an array and the excludes is an empty array', () => {
    const array = [
      { name: 'John', age: 20 },
      { name: 'Jane', age: 21 },
    ];
    const excludes = [];
    expect(excludeItems(array, excludes)).toEqual(array);
  });
  test('should return an array with the items that do not include in the excludes', () => {
    const array = [
      { name: 'John', age: 20 },
      { name: 'Jane', age: 21 },
    ];
    const excludes = [{ k: 'name', v: 'John' }];
    expect(excludeItems(array, excludes)).toEqual([{ name: 'Jane', age: 21 }]);
  });
  test('should return an array with the items that do not include in the excludes', () => {
    const array = [
      { name: 'John', age: 20 },
      { name: 'Jane', age: 21 },
    ];
    const excludes = [{ k: 'age', v: 21 }];
    expect(excludeItems(array, excludes)).toEqual([{ name: 'John', age: 20 }]);
  });
});
