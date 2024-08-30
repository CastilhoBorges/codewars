"use strict";

const solution = function (nums) {
  return nums ? nums.sort((a, b) => a - b) : [];
};
console.log(solution([]));
