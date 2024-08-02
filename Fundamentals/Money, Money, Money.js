function calculateYears(principal, interest, tax, desired) {
  if (principal === desired) return 0;
  let anos = 0;
  while (principal < desired) {
    principal += principal * interest * (1 - tax);
    anos++
  }

  return anos
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));
