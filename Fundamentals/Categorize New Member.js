const openOrSenior = function (data) {
  let newMembers = [];
  for (const x in data) {
    data[x][0] >= 55 && data[x][1] > 7
      ? newMembers.push("Senior")
      : newMembers.push("Open");
  }

  return newMembers;
};

console.log(openOrSenior());
