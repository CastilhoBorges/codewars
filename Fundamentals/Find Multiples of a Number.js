function findMultiples(integer, limit) {
  let mmc = integer;
  const arr = [];
  while (mmc <= limit) {
    arr.push(mmc);
    mmc += integer;
  }
  return arr;
}
