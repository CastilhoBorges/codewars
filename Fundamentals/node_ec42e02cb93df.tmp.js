const persistence = function (num) {
  let xMulti = 0;
  let value = 1;
  num = String(num).split("").map(Number);
  while (num.length > 1) {
    for (i = 0; i < num.length; i++) {
      value *= num[i];
    }
  }
  console.log(value); 
};

persistence(100);
