const { input } = require('./input');

const open = ['(', '[', '{', '<'];
const close = [')', ']', '}', '>'];
const completion = [];
const points = [];

input.forEach((line) => valid(line));

for (let comp of completion) {
  let result = 0;
  for (let character of comp) {
    result *= 5;
    result += close.indexOf(character) + 1;
  }
  points.push(result);
}
points.sort((a, b) => a - b);

if (points.length % 2 == 0) {
  const result =
    (points[points.length / 2] + points[points.length / 2 - 1]) / 2;
  console.log(result);
} else {
  console.log(points[Math.floor(points.length / 2)]);
}

function valid(line) {
  while (line.length !== 0) {
    for (let i = 0; i < line.length; i++) {
      if (close.includes(line[i])) {
        if (open.indexOf(line[i - 1]) === close.indexOf(line[i])) {
          line.splice(i - 1, 2);
          break;
        } else {
          return;
        }
      }
      if (i + 1 === line.length) {
        const arr = [];
        for (let j = line.length - 1; j >= 0; j--) {
          const index = open.indexOf(line[j]);
          arr.push(close[index]);
        }
        completion.push(arr);
        return;
      }
    }
  }
}
