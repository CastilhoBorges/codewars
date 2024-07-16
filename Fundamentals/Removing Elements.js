function removeEveryOther(arr) {
  let arrNew = [];
  for (let i = 0; i < arr.length; i++) {
    arrNew.push(arr[i]);
    arr.shift();
  }

  return arrNew;
}

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
