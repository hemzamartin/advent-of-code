const { input } = require('./input');
const lowPoints = [];

// Finding lowpoints
for (let row in input) {
  for (let col in input[row]) {
    const rowIndex = parseInt(row, 10);
    const colIndex = parseInt(col, 10);
    if (findLowpoints(input, rowIndex, colIndex)) {
      lowPoints.push({ rowIndex: rowIndex, colIndex: colIndex });
    }
  }
}

// Finding basins
const basinSize = [];
for (let lowPoint of lowPoints) {
  const basin = [];
  findBasin(input, basin, lowPoint.rowIndex, lowPoint.colIndex);
  basinSize.push(basin.length);
}

basinSize.sort((a, b) => b - a);
console.log(basinSize[0] * basinSize[1] * basinSize[2]);

function findLowpoints(input, rowIndex, colIndex) {
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

function findBasin(input, basin, rowIndex, colIndex) {
  if (colIndex + 1 < input[rowIndex].length) {
    if (input[rowIndex][colIndex + 1] !== 9) {
      if (!basin.includes(String(`${rowIndex}${colIndex + 1}`))) {
        basin.push(String(`${rowIndex}${colIndex + 1}`));
        findBasin(input, basin, rowIndex, colIndex + 1);
      }
    }
  }
  if (colIndex - 1 >= 0) {
    if (input[rowIndex][colIndex - 1] !== 9) {
      if (!basin.includes(String(`${rowIndex}${colIndex - 1}`))) {
        basin.push(String(`${rowIndex}${colIndex - 1}`));
        findBasin(input, basin, rowIndex, colIndex - 1);
      }
    }
  }
  if (rowIndex + 1 < input.length) {
    if (input[rowIndex + 1][colIndex] !== 9) {
      if (!basin.includes(String(`${rowIndex + 1}${colIndex}`))) {
        basin.push(String(`${rowIndex + 1}${colIndex}`));
        findBasin(input, basin, rowIndex + 1, colIndex);
      }
    }
  }
  if (rowIndex - 1 >= 0) {
    if (input[rowIndex - 1][colIndex] !== 9) {
      if (!basin.includes(String(`${rowIndex - 1}${colIndex}`))) {
        basin.push(String(`${rowIndex - 1}${colIndex}`));
        findBasin(input, basin, rowIndex - 1, colIndex);
      }
    }
  }
  return true;
}
