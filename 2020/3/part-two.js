const { input } = require('./input');

const row_size = input[0].length;
const col_size = input.length;
const directions = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];
const result = [];

for (let i = 0; i < directions.length; i++) {
  let x = 0;
  let y = 0;
  let treeCount = 0;
  while (y < col_size - 1) {
    x += directions[i][0];
    y += directions[i][1];
    if (x >= row_size) x -= row_size;
    if (input[y][x] === 1) treeCount++;
  }
  result.push(treeCount);
}
console.log(
  result.reduce(
    (previousValue, currentValue) => (previousValue *= currentValue)
  )
);
