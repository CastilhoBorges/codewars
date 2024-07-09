function doubleChar(str) {
  let wordArr = str.split("");
  let arr = [];
  for (let i = 0; i < wordArr.length; i++) {
    arr.push(wordArr[i] + wordArr[i]);
  }
  return arr.join("");
}

console.log(doubleChar(`11223344`));
