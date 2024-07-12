const abbrevName = function (name) {
  name = name.split(" ");
  let first = name[0][0];
  let second = name[1][0];
  first = first.toUpperCase();
  second = second.toUpperCase();
  return `${first}.${second}`;
};

console.log(abbrevName("Augusto borges"));
