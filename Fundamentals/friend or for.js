const friend = function (friends) {
  let myFriends = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length !== 4) {
      continue;
    }
    myFriends.push(friends[i]);
  }

  return myFriends
};

console.log(friends(['joao', 'Marcos', 'caca']));
