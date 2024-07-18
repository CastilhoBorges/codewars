function repeatStr(n, s) {
  let str = "";
  while (n > 0) {
    str = str + s;
    n--;
  }
  return str;
}

console.log(repeatStr(5, "i"));
