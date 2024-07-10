function findAverage(array) {
  let sum = 0;

  if (array.length === 0) return 0;

  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return (sum / array.length).toFixed(2);
}

console.log(findAverage([20,17,50,65,38,26,91,89,78]));
