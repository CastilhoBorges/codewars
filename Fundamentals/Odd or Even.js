const oddOrEven = function (array) {
  let result = 0;
  for (const value of array) {
    result += value;
  }

  return result % 2 === 0 ? "even" : "odd";
};

console.log(oddOrEven([1023, 1, 3]));


