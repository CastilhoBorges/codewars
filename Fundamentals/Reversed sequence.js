"use strict";

const reverseSeq = (n) => {
  let myArr = [];
  if (n > 0) {
    while (n > 0) {
      myArr.push(n);
      n -= 1;
    }
    return myArr;
  }
};
