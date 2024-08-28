"use strict";

const sumDigits = function (number) {
  return String(Math.abs(number))
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);
};

console.log(sumDigits(-32));
