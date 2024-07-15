
function towerBuilder(n) {
    const tower = [];
    for (let i = 0; i < n; i++) {
      const spaces = ' '.repeat(n - i - 1);
      const stars = '*'.repeat((i * 2) + 1);
      tower.push(spaces + stars + spaces);
    }
    return tower;
  }

console.log(towerBuilder(3));
