function minMax(arr) {
  let newArr = [];
  let max = Math.max.apply(Math, arr);
  let min = Math.min.apply(Math, arr);
  newArr.push(min);
  newArr.push(max);
  return newArr;
}

console.log(minMax([1, 2, 3, 4, 5]));
