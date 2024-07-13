const reverseWords = function (str) {
  return str.split("").reverse().join('').split(' ').reverse().join(' ');
};

console.log(reverseWords("aug bor"));
