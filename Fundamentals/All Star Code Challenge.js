const strCount = function (str, letter) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      sum++;
    }
  }
  return sum;
};

console.log(strCount('Augustooooooooooo', 'o'));
