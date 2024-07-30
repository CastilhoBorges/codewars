const removeChar = function (s) {
  s = s.split("");
  s.pop();
  s.shift();
  return s.join('');
};

console.log(removeChar('country')); 
