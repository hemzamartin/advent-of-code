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
  if (pair[0][0] <= pair[1][0] && pair[0][1] >= pair[1][1]) {
    return true;
  }
  if (pair[0][0] >= pair[1][0] && pair[0][1] <= pair[1][1]) {
    return true;
  }
  return false;
}

console.log(pairs);
