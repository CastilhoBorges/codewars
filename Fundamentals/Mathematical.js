const basicOp = function (operation, value1, value2) {
  if (operation === "+") {
    return value1 + value2;
  }

  if (operation === "-") {
    return value1 - value2;
  }

  if (operation === "*") {
    return value1 * value2;
  }

  if (operation === "/") {
    return value1 / value2;
  }
};

console.log(basicOp('/', 10, 10));
