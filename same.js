const comp = function (array1, array2) {
  let equals = true;
  let arr = [];
  let allTrue = true;
  for (i = 0; i < array1.length; i++) {
    const elements = array1[i] * array1[i];
    if (array2.includes(elements)) {
      arr.push(equals);
    } else {
      continue;
    }
  }

  for (i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      allTrue = true;
    }

    allTrue = false;
    break;
  }

  return allTrue;
};

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [12, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);
