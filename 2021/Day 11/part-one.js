const { input } = require('./input');
const directions = [
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
];
let countFlashes = 0;

for (let step = 0; step < 10; step++) {
  stepOne();
  stepTwo();
  stepThree();
  printGrid();
}

console.log(countFlashes);

function stepOne() {
  for (let line in input) {
    for (let number in input[line]) input[line][number]++;
  }
}

function stepTwo() {
  for (let i = 0; i < input[0].length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input[i][j] > 9) {
        increaseAdjacent(i, j);
        i = -1;
        j = -1;
        break;
      }
    }
  }
}

function stepThree() {
  for (let line in input) {
    for (let number in input[line])
      if (input[line][number] === true) {
        input[line][number] = 0;
        countFlashes++;
      }
  }
}

function increaseAdjacent(x, y) {
  input[x][y] = true;
  for (let dir of directions) {
    if (checkBounds(x + dir[0], y + dir[1])) {
      if (input[x + dir[0]][y + dir[1]] !== true)
        input[x + dir[0]][y + dir[1]]++;
    }
  }
}

function checkBounds(x, y) {
  return !(x < 0 || y < 0 || x >= input[0].length || y >= input.length);
}

function printGrid() {
  input.forEach((line) => console.log(line.join(' ')));
  console.log();
}
