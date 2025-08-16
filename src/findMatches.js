export function findMatches(array, match) {
  if (!Array.isArray(array) || !match || typeof match !== 'object') {
    return [];
  }
  const matchKeys = Object.keys(match);
  if (matchKeys.length === 0) {
    return array;
  }

  return array.filter((item) => {
    if (typeof item !== 'object' || item === null) {
      return false;
    }
    return matchKeys.every((key) => {
      if (!(key in item)) {
        return false;
      }

      return item[key] === match[key];
    });
  });
}
