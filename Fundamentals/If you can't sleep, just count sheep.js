"use strict";

const countSheep = function (num) {
  let str = "";
  for (let count = 1; count <= num; count++) {
    str += `${count} sheep...`;
  }

  return str;
};

console.log(countSheep(5));
