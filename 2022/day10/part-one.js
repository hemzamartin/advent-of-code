const { input } = require("./input");

const data = input
  .split("\n")
  .map((line) => line.split(" "))
  .map((inp) =>
    inp[0] === "noop"
      ? { cycles: 1, value: 0 }
      : { cycles: 2, value: parseInt(inp[1]) }
  );

let keyPoint = 20;
const keyIncrement = 40;
let cycle = 0;
let sum = 0;
let X = 1;

for (let instruction of data) {
  for (let i = 0; i < instruction.cycles; i++) {
    cycle++;
    checkKeyPoint();
  }
  X += instruction.value;
}

function checkKeyPoint() {
  if (keyPoint === cycle) {
    sum += X * cycle;
    keyPoint += keyIncrement;
  }
}

console.log(sum);
