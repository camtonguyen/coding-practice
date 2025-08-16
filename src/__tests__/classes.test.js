import { classes } from '../classes.js';

describe('classes', () => {
  test('should return a string of class names', () => {
    expect(classes('foo', 'bar', 'baz')).toBe('foo bar baz');
    expect(classes('foo', 'bar', 'baz', null, undefined, 0, 1)).toBe(
      'foo bar baz'
    );
    const isActive = true;
    expect(classes(isActive && 'active')).toBe('active');
    expect(classes(isActive && 'active', 'inactive')).toBe('active inactive');
    expect(classes(isActive && 'active', 'inactive', null)).toBe(
      'active inactive'
    );
  });
});
