const { input } = require('./input');

let count = 0;

for (let line of input) {
  for (let value of line.output) {
    const length = value.length;
    if (unique.includes(length)) count++;
  }
}

console.log(count);
