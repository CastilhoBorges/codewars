const getMiddle = function (s) {
  if (s.length % 2 === 0) {
    return s[(s.length - 1) / 2 - 0.5] + s[(s.length - 1) / 2 + 0.5];
  } else {
    return s[(s.length - 1) / 2];
  }
};

console.log(getMiddle())
