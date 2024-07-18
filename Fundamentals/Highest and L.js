function highAndLow(numbers) {
  numbers = numbers.split(" ");
  const max = Math.max.apply(Math, numbers);
  const min = Math.min.apply(Math, numbers);
  return `${max} ${min}`;
}

console.log(highAndLow("1 2 3 4 5"));
