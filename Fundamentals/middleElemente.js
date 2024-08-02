const gimme = function (triplet) {
  const newArr = [...triplet].sort((a, b) => a - b);
  return triplet.indexOf(newArr[1]);
};

