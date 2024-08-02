const sequenceSum = (begin, end, step) => {
  let sum = 0;
  while (end > begin) {
    sum = sum + begin;
    console.log(sum);
    begin = begin + step;
    console.log(begin);
  }
};

sequenceSum((1, 5, 1));
