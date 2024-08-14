const capitals = function (word) {
  const newArr = [];
  for (const l of word) {
    if (l === l.toUpperCase()) {
      newArr.push(word.indexOf(l));
    }
  }

  return newArr
};

console.log(capitals("CodEWaRs"));
console.log();