const { input } = require('./input');
let sum = 0;
for (let line of input) {
  const arr = Array(10).fill(0);
  const output = [];
  while (arr.includes(0)) {
    findValues(line.input, arr);
  }
  for (let value of line.output) {
    for (let compareValue in arr) {
      if (value.length === arr[compareValue].length)
        for (let i = 0; i < value.length; i++) {
          if (!arr[compareValue].includes(value[i])) break;
          if (i + 1 === value.length) output.push(compareValue);
        }
    }
  }
  const outputValue = parseInt(output.join(''), 10);
  sum += outputValue;
}
console.log(sum);

function findValues(input, values) {
  for (let value of input) {
    const length = value.length;
    switch (length) {
      case 2:
        values[1] = value;
        break;
      case 3:
        values[7] = value;
        break;
      case 4:
        values[4] = value;
        break;
      case 7:
        values[8] = value;
        break;
      case 6:
        if (values[1] !== 0) {
          if (!(value.includes(values[1][0]) && value.includes(values[1][1]))) {
            values[6] = value;
            break;
          }
        }
        if (values[4] !== 0) {
          const length = values[4].length;
          let i = 0;
          for (i; i < length; i++) {
            if (!value.includes(values[4][i])) break;
          }
          if (i === length) {
            values[9] = value;
            break;
          }
        }
        if (values[6] !== 0 && values[9] !== 0) values[0] = value;
        break;
      case 5:
        if (values[1] !== 0 && values[6] !== 0) {
          let f;
          for (let character of values[1])
            if (values[6].includes(character)) {
              f = character;
              break;
            }
          if (!value.includes(f)) {
            values[2] = value;
            break;
          }
        }
        if (value.includes(values[1][0]) && value.includes(values[1][1])) {
          values[3] = value;
          break;
        }
        if (values[2] !== 0 && values[3] !== 0) {
          values[5] = value;
        }
        break;
    }
  }
}
