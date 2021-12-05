const { input } = require('./input');
let array = [];

// Array init
for (let i = 0; i < 1000; i++) {
  array.push([]);
  for (let j = 0; j < 1000; j++) {
    array[i][j] = 0;
  }
}

// Reading data
for (let line of input) {
  calculateLine(line, array);
}

let count = 0;
for (let line in array) {
  for (let number of array[line]) {
    if (parseInt(number, 10) >= 2) {
      count++;
    }
  }
}
console.log(count);

function calculateLine(line, array) {
  let x1 = line[0][0];
  let y1 = line[0][1];
  let x2 = line[1][0];
  let y2 = line[1][1];

  if (x1 === x2) {
    if (y1 < y2) {
      for (let i = y1; i <= y2; i++) {
        array[x1][i]++;
      }
    } else {
      for (let i = y2; i <= y1; i++) {
        array[x1][i]++;
      }
    }
  } else if (y1 === y2) {
    if (x1 < x2) {
      for (let i = x1; i <= x2; i++) {
        array[i][y1]++;
      }
    } else {
      for (let i = x2; i <= x1; i++) {
        array[i][y1]++;
      }
    }
  }
}
