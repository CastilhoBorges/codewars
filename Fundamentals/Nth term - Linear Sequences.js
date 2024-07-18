function nthTermOf(sequence) {
  const termA = sequence[1] - sequence[0];
  const termB = sequence[0] - termA;
  return `${termA}n + ${termB}`;
}

console.log(nthTermOf([3, 5, 7, 9, 11]));
