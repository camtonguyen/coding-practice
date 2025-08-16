// 1. recursive

export function flattenArrayRecursive(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === null || element === undefined) {
      continue;
    }
    if (Array.isArray(element)) {
      result.push(...flattenArrayRecursive(element));
    } else {
      result.push(element);
    }
  }
  return result;
}

// 2. iterative stack

export function flattenArrayIterativeStack(arr) {
  const result = [];
  const stack = [...arr];
  while (stack.length > 0) {
    const element = stack.pop(); // remove and get the last element from the stack
    if (element === null || element === undefined) {
      continue;
    }
    if (Array.isArray(element)) {
      // Use ...spread operator to add the individual elements, not an array itself
      stack.push(...element); // push the elements of the nested array to the stack
    } else {
      result.unshift(element); // add the element to the beginning of the result array to maintain the order
    }
  }
  return result;
}

export function flattenArrayIterativeQueue(arr) {
  const result = [];
  const queue = [...arr];
  while (queue.length > 0) {
    const element = queue.shift(); // remove and get the first element from the queue
    if (element === null || element === undefined) {
      continue;
    }
    if (Array.isArray(element)) {
      queue.unshift(...element); // if element is an array, add all its elements to the front of the queue
    } else {
      // if not, add element to the result
      result.push(element);
    }
  }
  return result;
}

// ES2019+ only
export function flattenArrayNative(arr) {
  return arr.flat(Infinity).filter((elm) => elm !== null && elm !== undefined);
}
