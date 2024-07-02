function rentalCarCost(d) {
  let total;
  let rentDay = d * 40;
  if (d >= 7) {
    total = rentDay - 50;
    return total;
  } else if (d >= 3) {
    total = rentDay - 20;
    return total;
  } else {
    return rentDay;
  }
}

console.log(rentalCarCost(3));
