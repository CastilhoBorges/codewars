"use strict";

const incrementString = function (str) {
  const matchStr = str.match(/\d+$/);
  if (matchStr) {
    let num = parseInt(matchStr[0], 10) + 1;
    let strFinal = num.toString().padStart(str.length, "0");
    return str.replace(matchStr, strFinal);
  }
};

console.log(incrementString("foobar000"));

// NÃO RESOLVIDO 