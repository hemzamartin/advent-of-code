const { dots, folds } = require('./input');

for (let fold of folds) {
  for (let coord of dots) {
    if (coord[fold.id] > fold.value)
      coord[fold.id] = fold.value - (coord[fold.id] - fold.value);
  }
}

console.log(new Set(dots.map((a) => a.x + ',' + a.y)).size);
