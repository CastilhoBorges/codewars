const sum = function (numbers) {
  "use strict";
  return numbers.reduce((a, b) => a + b, 0);
};

console.log(sum([10, 5, 3, 7, 2]));