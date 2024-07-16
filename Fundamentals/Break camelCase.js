let str = "camelCasing";
console.log(str);
const esp = " ";
for (let i = 0; i < str.length; i++) {
  str = str.split("[A - Z]");
}
console.log(str);
