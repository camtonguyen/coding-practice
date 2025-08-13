import {
  flattenArrayRecursive,
  flattenArrayIterativeStack,
  flattenArrayIterativeQueue,
} from './flattenArray.js';

console.log(
  'flattenArrayRecursive([1, 2, [3, 4, [5, 6]], 7, [8, 9]])',
  flattenArrayRecursive([1, 2, [3, 4, [5, 6]], 7, [8, 9]])
);

console.log(
  'flattenArrayIterativeStack([1, 2, [3, 4, [5, 6]], 7, [8, 9], null, undefined, 0])',
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
);

console.log(
  'flattenArrayIterativeQueue([1, 2, [3, 4, [5, 6]], 7, [-Infinity, Infinity]])',
  flattenArrayIterativeQueue([1, 2, [3, 4, [5, 6]], 7, [-Infinity, Infinity]])
);
