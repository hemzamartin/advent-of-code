const { input } = require('./input');

const array = input.map((seat) => getRow(seat) * 8 + getCol(seat));
console.log(array.reduce((prev, curr) => (prev = curr > prev ? curr : prev)));

function getRow(seat) {
  let rowMin = 0;
  let rowMax = 127;
  for (let i = 0; i < 7; i++) {
    const diff = (rowMax - rowMin + 1) / 2;
    switch (seat[i]) {
      case 'F':
        rowMax -= diff;
        break;
      case 'B':
        rowMin += diff;
        break;
    }
  }
  return rowMin;
}

function getCol(seat) {
  let colMin = 0;
  let colMax = 7;
  for (let i = 7; i < 10; i++) {
    const diff = (colMax - colMin + 1) / 2;
    switch (seat[i]) {
      case 'L':
        colMax -= diff;
        break;
      case 'R':
        colMin += diff;
        break;
    }
  }
  return colMin;
}
