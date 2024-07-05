const summation = function (num) {
  let sum = 0;
  while (num > 0) {
    sum += num;
    num--;
  }
  return sum;
};

console.log(summation(8));
