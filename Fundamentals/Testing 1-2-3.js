const number = function (array) {
  let number = 1;
  for (let i = 0; i < array.length; i++, number++) {
    array[i] = `${number}: ${array[i]}`;
  }
  return array;
};

console.log(number(["a", "b", "c", 'd','e']));
