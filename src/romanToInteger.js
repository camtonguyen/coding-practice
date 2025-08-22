export function romanToInteger(roman) {
  if (!roman) return 0;
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  // acc (accumulator): Running total of the integer value
  // char: Current Roman numeral character
  // index: Position in the string
  // array: The split Roman numeral string
  return roman.split('').reduce((acc, char, index, array) => {
    const current = romanMap[char];
    const next = romanMap[array[index + 1]];
    // If the next character has a larger value than the current character → subtract current value
    // Otherwise → add current value
    return acc + (next > current ? -current : current);
  }, 0);
}

// Example:
// Let's trace through "XIV" (14):
// X: current=10, next=1 → 10 > 1, so add 10 → acc = 10
// I: current=1, next=5 → 5 > 1, so subtract 1 → acc = 10 + (-1) = 9
// V: current=5, next=undefined → add 5 → acc = 9 + 5 = 14
// The function correctly handles:
// Normal addition: "VI" = 6 (5 + 1)
// Subtraction cases: "IV" = 4 (5 - 1), "IX" = 9 (10 - 1)
// Complex numbers: "MCMXC" = 1990 (1000 + (1000-100) + (100-10))

console.log(romanToInteger('III')); // 3
console.log(romanToInteger('LVIII')); // 58 (L=50, V=5, III=3)
console.log(romanToInteger('MCMXCIV')); // 1994 (M=1000, CM=900, XC=90, IV=4)
console.log(romanToInteger('IV')); // 4
console.log(romanToInteger('IX')); // 9
console.log(romanToInteger('XL')); // 40
console.log(romanToInteger('XC')); // 90
console.log(romanToInteger('CD')); // 400
console.log(romanToInteger('CM')); // 900
console.log(romanToInteger('MCDXLIV')); // 1444 (M=1000, CD=400, XL=40, IV=4)
