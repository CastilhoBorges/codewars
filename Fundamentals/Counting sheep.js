function countSheeps(sheep) {
  let sheeps = 0;
  for (i = 0; i < sheep.length; i++) {
    if (sheep[i] !== true) continue;
    sheeps += 1;
  }

  return sheeps;
}

console.log(countSheeps([undefined,null,false,true]));