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

let visibleCount = 0;

for (let row in data) {
  for (let col in data[row]) {
    if (checkVisibility(parseInt(row), parseInt(col))) {
      visibleCount++;
    }
  }
}

function checkVisibility(row, col) {
  for (let dir of directions) {
    let x = row + dir[0];
    let y = col + dir[1];
    let visible = true;
    while (checkBounds(x, y)) {
      if (data[x][y] >= data[row][col]) {
        visible = false;
        break;
      }
      x = x + dir[0];
      y = y + dir[1];
    }
    if (visible) return true;
  }
  return false;
}

function checkBounds(row, col) {
  if (row >= 0 && row < data.length && col >= 0 && col < data[0].length) {
    return true;
  }
  return false;
}

console.log(visibleCount);
