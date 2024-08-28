"use strict";

const getCount = function (str) {
  const arrVogais = str.split("").filter((a) => {
    if (a === "a" || a === "e" || a === "i" || a === "o" || a === "u") {
      return a;
    }
  });

  return arrVogais.length;
};
