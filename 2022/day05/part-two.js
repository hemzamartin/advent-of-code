const { input } = require("./input");

const data = input.split("\n");
const header = data
  .slice(0, data.indexOf("") - 1)
  .map((line) => line.split(""));

const instructions = data.splice(data.indexOf("")).map((line) =>
  line
    .replace("move ", "")
    .replace("from ", "")
    .replace("to ", "")
    .split(" ")
    .map((number) => parseInt(number))
);

const numberOfStacks = 9;

let stacks = [];
for (let i = 0; i < numberOfStacks; i++) {
  stacks.push(new Array());
}
for (let line of header.reverse()) {
  for (let i = 1; i < line.length; i += 4) {
    if (line[i] !== " ") {
      stacks[Math.floor(i / 4)].push(line[i]);
    }
  }
}

for (let inst of instructions) {
  let tempStack = [];
  for (let i = 0; i < inst[0]; i++) {
    let cargo = stacks[inst[1] - 1].pop();
    tempStack.push(cargo);
  }
  for (let i = 0; i < inst[0]; i++) {
    let cargo = tempStack.pop();
    stacks[inst[2] - 1].push(cargo);
  }
}

let output = "";
for (let i = 0; i < numberOfStacks; i++) {
  output += stacks[i].pop();
}

console.log(output);
