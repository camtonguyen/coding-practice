export function stringifyInput(input) {
  if (Array.isArray(input)) {
    return `[${input.map((item) => stringifyInput(item)).join(', ')}]`;
  }
  if (typeof input === 'object' && input !== null) {
    return `{${Object.keys(input)
      .map((key) => `"${key}": ${stringifyInput(input[key])}`)
      .join(', ')}}`;
  }
  if (typeof input === 'string') {
    return `"${input}"`;
  }
  if (typeof input === 'number' || typeof input === 'boolean') {
    return `${input}`;
  }
  if (input === null || input === undefined) return 'null';
  return input; // default case
}
