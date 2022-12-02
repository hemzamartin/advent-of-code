const { input } = require("./input");

const data = input.split("\n").map((line) => line.trim().split(" "));

const values = {
  X: 1,
  Y: 2,
  Z: 3,
};

const winner = {
  A: "Y",
  B: "Z",
  C: "X",
};

const draw = {
  A: "X",
  B: "Y",
  C: "Z",
};

let sum = 0;

for (let round of data) {
  sum += values[round[1]];
  if (round[1] === draw[round[0]]) {
    sum += 3;
    continue;
  }
  if (round[1] === winner[round[0]]) {
    sum += 6;
    continue;
  }
}

console.log(sum);
