function bouncingBall(h, bounce, window) {
  let seeBall = 0;
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    for (let quique = h * bounce; quique >= h; quique *= bounce) {
      seeBall += 1;
    }
    return seeBall.toFixed(10);
  } else {
    return -1;
  }
}

console.log(bouncingBall(2, 0.5, 1));
