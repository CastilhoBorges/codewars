const sortArray = function (array) {
  const oddNumbers = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
  let oddIndex = 0;

  return array.map((num) => {
    if (num % 2 !== 0) {
      return oddNumbers[oddIndex++];
    }

    return num;
  });
};

console.log(sortArray([5, 3, 2, 8, 1, 4]));
