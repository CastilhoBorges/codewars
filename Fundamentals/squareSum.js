// COm loop for-of no array 
const squareSum = function (numbers) {
  let result = 0;
  let sum = 0;
  for (const num of numbers) {
    result = num ** 2;
    sum += result;
  }

  return sum;
};

// Com metodo reduce 
const squareSum1 = function (numbers) {
  return numbers.reduce((sum, n) => {
    return n * n + sum;
  }, 0);
};

console.log(squareSum([1, 2]));
console.log(squareSum1([1, 3, 10]));