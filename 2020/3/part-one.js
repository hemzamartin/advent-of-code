const { input } = require('./input');

const row_size = input[0].length;
const col_size = input.length;
const right = 3;
const down = 1;

let x = 0;
let y = 0;
let treeCount = 0;
while (y < col_size - 1) {
  x += right;
  y += down;
  if (x >= row_size) x -= row_size;
  if (input[y][x] === 1) treeCount++;
}

console.log(treeCount);
