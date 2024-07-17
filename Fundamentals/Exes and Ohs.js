const XO = function (str) {
  let oS = [];
  let xS = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "o" || str[i] === "O") {
      oS.push(str[i]);
    } else if (str[i] === "x" || str[i] === "X") {
      xS.push(str[i]);
    } else {
      continue;
    }
  }

  if (oS.length === xS.length) {
    return true;
  } else {
    return false;
  }
};

console.log(XO("xxxm"));
