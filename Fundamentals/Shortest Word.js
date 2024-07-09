const findShort = function (s) {
  s = s.split(" ");
  let arrLength = [];
  let value;

  for (let i = 0; i < s.length; i++) {
    arrLength.push(s[i].length);
  }

  let minValue = Math.min.apply(Math, arrLength);

  for (let i = 0; i < arrLength.length; i++) {
    if (arrLength[i] === minValue) {
      value = arrLength[i];
    }
  }
  return value;
};

console.log(findShort("Let's travel abroad shall we"));
