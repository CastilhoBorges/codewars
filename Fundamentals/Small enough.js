const smallEnough = function (arr, limit) {
  const arr1 = [];
  for (const nmr of arr) {
    if (nmr > limit) {
      arr1.push(nmr);
    }
  }

  return arr1.length > 0 ? false : true;
};
