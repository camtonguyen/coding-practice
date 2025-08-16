export function classes(...classObject) {
  return classObject
    .filter((element) => !!element && typeof element === 'string')
    .join(' ');
}
