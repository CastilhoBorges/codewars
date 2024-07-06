function descendingOrder(n) {
  let xStr = String(n);
  let subs = xStr.split("").map(Number);
  subs.sort();
  subs = subs.reverse();
  subs = subs.join("");

  return Number(subs);
}

console.log(descendingOrder(5874132369));
