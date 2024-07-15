const countBy = function (x, n) {
  let arr = [];
  let multiplo = x;
  while (n > 0) {
    arr.push(x);
    x = multiplo + x;
    n--;
  }

  return arr;
};

console.log(countBy(9, 9));
