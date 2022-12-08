const { input } = require("./input");

const data = input
  .split("\n")
  .map((line) => line.split("").map((height) => parseInt(height)));

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

let scoreArr = [];

for (let row in data) {
  for (let col in data[row]) {
    scoreArr.push(checkVisibility(parseInt(row), parseInt(col)));
  }
}

function checkVisibility(row, col) {
  let score = 1;
  for (let dir of directions) {
    let view = 0;
    let x = row + dir[0];
    let y = col + dir[1];
    while (checkBounds(x, y)) {
      if (data[x][y] >= data[row][col]) {
        view++;
        break;
      }
      x = x + dir[0];
      y = y + dir[1];
      view++;
    }
    score *= view;
  }
  return score;
}

function checkBounds(row, col) {
  if (row >= 0 && row < data.length && col >= 0 && col < data[0].length) {
    return true;
  }
  return false;
}

console.log(Math.max(...scoreArr));
