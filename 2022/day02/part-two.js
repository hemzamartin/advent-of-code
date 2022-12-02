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

const lose = {
  A: "Z",
  B: "X",
  C: "Y",
};

let sum = 0;

for (let round of data) {
  if (round[1] === "X") {
    sum += values[lose[round[0]]];
    sum += 0;
  } else if (round[1] === "Y") {
    sum += values[draw[round[0]]];
    sum += 3;
  } else if (round[1] === "Z") {
    sum += values[winner[round[0]]];
    sum += 6;
  }
}

console.log(sum);
