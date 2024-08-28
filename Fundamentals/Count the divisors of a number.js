const getDivisorsCnt = function (n) {
  const arr = [];
  for (let count = 1; count <= n; count++) {
    if (n % count === 0) {
      arr.push(count);
    } else {
      continue;
    }
  }

  return arr.length;
};
