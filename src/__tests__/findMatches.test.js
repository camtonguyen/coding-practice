import { findMatches } from '../findMatches.js';

describe('findMatches', () => {
  test('should return an empty array if the input is not an array', () => {
    expect(findMatches(null, { name: 'John' })).toEqual([]);
  });
  test('should return a match if the input is an array and the match is an object', () => {
    const array = [
      { name: 'John', age: 20, position: 'developer' },
      { name: 'Jane', age: 21, position: 'developer' },
    ];
    const match = { position: 'developer', age: 20 };
    expect(findMatches(array, match)).toEqual([
      { name: 'John', age: 20, position: 'developer' },
    ]);
  });
  test('should return a match if the input is an array and the match is an object', () => {
    const array = [
      { name: 'John', age: 20 },
      { name: 'Jane', age: 21 },
    ];
    const match = { name: 'John' };
    expect(findMatches(array, match)).toEqual([{ name: 'John', age: 20 }]);
  });
});
