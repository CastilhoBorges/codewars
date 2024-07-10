function between1(a, b) {
  let arr = [];
  while (a <= b) {
    arr.push(a);
    a++;
  }

  return arr;
}

function between2(a, b) {
  let arr = [];
  for (princip = a; princip <= b; princip++) {
    arr.push(princip);
  }

  return arr;
}

console.log(between2(1,4));
