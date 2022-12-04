const { input } = require("./input");

const data = input
  .split("\n")
  .map((line) =>
    line
      .split(",")
      .map((range) => range.split("-").map((number) => parseInt(number)))
  );

let pairs = 0;

for (let line of data) {
  if (comparePairs(line)) {
    pairs++;
  }
}

function comparePairs(pair) {
  let values = [];
  for (let i = pair[0][0]; i <= pair[0][1]; i++) {
    values.push(i);
  }
  for (let i = pair[1][0]; i <= pair[1][1]; i++) {
    values.push(i);
  }
  for (let number of values) {
    if (values.indexOf(number) !== values.lastIndexOf(number)) {
      return true;
    }
  }
  return false;
}

console.log(pairs);
