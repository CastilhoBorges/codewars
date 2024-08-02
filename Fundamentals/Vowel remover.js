const shortcut = function (string) {
  string = string.split("");
  const arrNew = [];
  for (const caracter of string) {
    if (
      caracter !== "a" &&
      caracter !== "A" &&
      caracter !== "e" &&
      caracter !== "E" &&
      caracter !== "I" &&
      caracter !== "i" &&
      caracter !== "o" &&
      caracter !== "O" &&
      caracter !== "u" &&
      caracter !== "U"
    ) {
      arrNew.push(caracter);
    }
  }

  return arrNew.join("");
};

function short(string) {
  return string.replace(/[aeiou]/g, "");
}

console.log(short('Augusto'));