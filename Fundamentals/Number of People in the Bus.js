const number = function (busStops) {
  let init = 0;
  let out = 0;
  let total;
  for (i = 0; i < busStops.length; i++) {
    init += busStops[i][0];
    out += busStops[i][1];
    total = init - out;
  }
  return total;
};

console.log(number([[10,0],[3,5],[5,8]]));