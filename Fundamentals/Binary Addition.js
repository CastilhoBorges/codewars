const addBinary = function (a, b) {
  let sum = a + b;
  let binario = "";
  while (sum > 0) {
    binario = (sum % 2) + binario;
    sum = Math.floor(sum / 2);
  }

  return binario;
};

console.log(addBinary(5,5));