function bouncingBall(h, bounce, window) {
  let quique = h * (2 / 3);
  let seeBall = 1;
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    while (quique >= window) {
      seeBall += 1;
    }
    return seeBall;
  } else {
    return -1;
  }
}

console.log(bouncingBall(3.0, 0.66, 1.5))
