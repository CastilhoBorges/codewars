const printerError = function (s) {
  let error = 0;
  let number = 0;
  for (let i = 0; i < s.length; i++, number++) {
    if (
      s[i] !== "a" &&
      s[i] !== "b" &&
      s[i] !== "c" &&
      s[i] !== "d" &&
      s[i] !== "e" &&
      s[i] !== "f" &&
      s[i] !== "g" &&
      s[i] !== "h" &&
      s[i] !== "i" &&
      s[i] !== "j" &&
      s[i] !== "k" &&
      s[i] !== "l" &&
      s[i] !== "m"
    ) {
      error++;
    }
  }

  return `${error}/${number}`;
};
