export function reorderArrayWithNewIndex(array, newOrders) {
  if (
    !array ||
    !Array.isArray(array) ||
    !newOrders ||
    !Array.isArray(newOrders)
  )
    return [];
  const result = new Array(array.length);
  for (let i = 0; i < array.length; i++) {
    result[newOrders[i]] = array[i];
  }
  return result;
}

const test = reorderArrayWithNewIndex(
  ['a', 'b', 'c', 'd', 'e'],
  [3, 0, 4, 1, 2]
);
console.log(test);
