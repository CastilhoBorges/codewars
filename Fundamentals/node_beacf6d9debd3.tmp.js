const reverseWords = function (str) {
  str.split(" ");
  let arr = [];
  let reverseArr = [];
  for (i = 0; i < str.length; i++) {
    arr.push(str[i].split(""));
    for (i = 0; i < arr.length; i++) {
      arr.reverse().join('');
      reverseArr.push(arr.shift());

    }
  }

  return arr;
};

console.log(reverseWords("aug cas tilho"));
