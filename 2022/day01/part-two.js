const { input } = require("./input");

const data = input.split("\n\n").map((line) =>
  line
    .split("\n")
    .map((line_data) => parseInt(line_data, 10))
    .reduce((acc, cur) => (acc += cur))
);

let max = [];

for (let number of data) {
  if (max.length < 3) {
    max.push(number);
    continue;
  }
  for (let max_value in max) {
    if (number > max[max_value]) {
      max.splice(max_value, 1);
      max.push(number);
      break;
    }
  }
}

console.log(max.reduce((acc, curr) => (acc += curr)));
