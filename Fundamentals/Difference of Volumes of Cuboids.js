function findDifference(a, b) {
  let sumA = 1;
  let sumB = 1;
  for (const x in a) {
    sumA *= a[x];
  }

  for (const x in b) {
    sumB *= b[x];
  }

  return sumA > sumB ? sumA - sumB : sumB - sumA;
}

console.log(findDifference([3, 2, 5], [1, 4, 4]));
