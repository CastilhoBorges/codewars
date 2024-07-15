const squareDigits = function (num) {
  let elevation = [];
  num = String(num).split("").map(Number);
  for (let i = 0; i < num.length; i++) {
    elevation.push(num[i] ** 2);
  }

  return Number(elevation.join(''));
};

console.log(squareDigits(3212)); 
