const { input } = require('./input');

const open = ['(', '[', '{', '<'];
const close = [')', ']', '}', '>'];
const invalidChars = [];
const points = Array(4).fill(0);

input.forEach((line) => valid(line));
invalidChars.forEach((character) => points[close.indexOf(character)]++);

console.log(
  points[0] * 3 + points[1] * 57 + points[2] * 1197 + points[3] * 25137
);

function valid(line) {
  while (line.length !== 0) {
    for (let i = 0; i < line.length; i++) {
      if (close.includes(line[i])) {
        if (open.indexOf(line[i - 1]) === close.indexOf(line[i])) {
          line.splice(i - 1, 2);
          break;
        } else {
          invalidChars.push(line[i]);
          return;
        }
      }
      if (i + 1 === line.length) {
        return;
      }
    }
  }
}
