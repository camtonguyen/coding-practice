export function excludeItems(array, excludes) {
  if (!Array.isArray(array) || !Array.isArray(excludes)) {
    return false;
  }
  if (excludes.length === 0) {
    return array;
  }
  return array.filter((item) => {
    return !excludes.some((exclude) => {
      if (typeof exclude !== 'object' || exclude === null) {
        return false;
      }
      const { k, v } = exclude;
      if (k === undefined || v === undefined) {
        return false;
      }
      return item.hasOwnProperty(k) && item[k] === v;
    });
  });
}
