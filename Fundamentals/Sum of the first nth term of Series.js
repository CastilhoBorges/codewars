function SeriesSum(n) {
  const high = 1;
  let low = 1;
  let result = 0;

  if (n === 0) {
    return "0.00";
  }

  while (n > 0) {
    result += high / low;
    low += 3;
    n--;
  }

  return String(result.toFixed(2));
}

console.log(SeriesSum(2000));
