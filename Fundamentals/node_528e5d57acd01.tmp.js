function calculateYears(principal, interest, tax, desired) {
  if (principal === desired) return 0;
  let countYears = 0;
  while (principal < desired) {
    principal = principal + principal * interest;
    principal = principal - principal * tax;
    countYears++;
  }

  return countYears;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));
