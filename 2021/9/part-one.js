const { input } = require('./input');
const lowPoints = [];

for (let row in input) {
  for (let col in input[row]) {
    const rowIndex = parseInt(row, 10);
    const colIndex = parseInt(col, 10);
    if (checkAdjacent(input, rowIndex, colIndex)) {
      lowPoints.push(input[rowIndex][colIndex]);
    }
  }
}
let sum = 0;
for (let number of lowPoints) {
  sum += number + 1;
}
console.log(sum);

function checkAdjacent(input, rowIndex, colIndex) {
  if (colIndex + 1 < input[rowIndex].length) {
    if (input[rowIndex][colIndex + 1] <= input[rowIndex][colIndex])
      return false;
  }
  if (colIndex - 1 >= 0) {
    if (input[rowIndex][colIndex - 1] <= input[rowIndex][colIndex])
      return false;
  }
  if (rowIndex + 1 < input.length) {
    if (input[rowIndex + 1][colIndex] <= input[rowIndex][colIndex])
      return false;
  }
  if (rowIndex - 1 >= 0) {
    if (input[rowIndex - 1][colIndex] <= input[rowIndex][colIndex]) {
      return false;
    }
  }
  return true;
}
