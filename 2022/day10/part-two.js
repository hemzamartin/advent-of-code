const { input } = require("./input");

const data = input
  .split("\n")
  .map((line) => line.split(" "))
  .map((inp) =>
    inp[0] === "noop"
      ? { cycles: 1, value: 0 }
      : { cycles: 2, value: parseInt(inp[1]) }
  );

let cycle = 0;
let X = 1;
let row = "";

for (let instruction of data) {
  for (let i = 0; i < instruction.cycles; i++) {
    cycle++;
    checkKeyPoint();
  }
  X += instruction.value;
}

function checkKeyPoint() {
  let cycleIndex = (cycle - 1) % 40;
  row += cycleIndex >= X - 1 && cycleIndex <= X + 1 ? colorCyan("#") : ".";
  if (cycle % 40 === 0) {
    console.log(row);
    row = "";
  }
}

function colorCyan(msg) {
  return "\x1b[46m" + msg + "\x1b[0m";
}
