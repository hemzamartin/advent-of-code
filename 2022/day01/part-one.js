const { input } = require("./input");

const data = input.split("\n\n").map((line) =>
  line
    .split("\n")
    .map((line_data) => parseInt(line_data, 10))
    .reduce((acc, cur) => (acc += cur))
);

let max = data[0];
for (let number of data) {
  if (number > max) {
    max = number;
  }
}

console.log(max);
