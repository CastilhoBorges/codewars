const noSpace = (x) => {
  let wordsArray = x.split(" ");
  let tri = wordsArray.join("");
  return tri;
};

console.log(noSpace("     a        s     to     de baoaaaa "));
