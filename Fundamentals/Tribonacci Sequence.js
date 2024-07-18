function tribonacci(signature, n) {
  if (n === 0) return [];

  if (n === 1) {
    return [signature[0]];
  } else if (n === 2) {
    return [signature[0], signature[1]];
  } else if (n === 3) {
    return [signature[0], signature[1], signature[2]];
  } else {
    let sum = 0;
    while (signature.length !== n) {
      sum =
        signature[signature.length - 1] +
        signature[signature.length - 2] +
        signature[signature.length - 3];
      signature.push(sum);
    }

    return signature;
  }
}

console.log(tribonacci([1, 1, 1], 1));
