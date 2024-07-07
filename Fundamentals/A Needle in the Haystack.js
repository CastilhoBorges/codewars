function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] !== "needle") {
      continue;
    }
    return `found the needle at position ${haystack.indexOf("needle")}`;
  }
}

console.log(
  findNeedle([
    "3",
    "123124234",
    undefined,
    "needle",
    "world",
    "hay",
    2,
    "3",
    true,
    false,
  ])
);
