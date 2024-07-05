function fakeBin(x) {
  let newStr = "";
  for (var i = 0; i < x.length; i++) {
    if (Number(x[i]) >= 5) {
      newStr += "1";
    } else {
      newStr += "0";
    }
  }
  return newStr;
}

console.log(fakeBin("45385593107843568"));
