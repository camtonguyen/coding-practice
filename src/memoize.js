export function memoize(callback, resolver) {
  const cache = new Map();
  const getKey = (args) =>
    resolver ? resolver(...args) : JSON.stringify(args);

  const memoized = function (...args) {
    const key = getKey(args); // generate a unique key for the current arguments
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = callback.apply(this, args); // call the original function with the current arguments
    cache.set(key, result); // store the result in the cache
    return result;
  };
  memoized.has = function (...args) {
    const key = getKey(args);
    return cache.has(key);
  };
  memoized.get = function (...args) {
    const key = getKey(args);
    return cache.get(key);
  };
  memoized.clear = () => {
    cache.clear();
  };
  memoized.delete = function (...args) {
    const key = getKey(args);
    return cache.delete(key);
  };
  return memoized;
}
