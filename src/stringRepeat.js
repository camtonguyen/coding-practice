String.prototype.stringRepeat = function (times) {
  if (times < 1) return '';
  return new Array(times).fill(this).join(''); // this refers to the string
};

const test = 'test'.stringRepeat(2);
console.log(test);
