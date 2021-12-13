const { dots, folds } = require('./input');

for (let fold of folds) {
  for (let coord of dots) {
    if (coord[fold.id] > fold.value)
      coord[fold.id] = fold.value - (coord[fold.id] - fold.value);
  }
}

const array = Array(6)
  .fill()
  .map(() => Array(40).fill(' '));

dots.forEach((line) => (array[line.y][line.x] = '#'));
array.forEach((line) => console.log(line.join(' ')));
