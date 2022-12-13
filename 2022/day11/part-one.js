const { input } = require("./input");

const data = input
  .split("\n\n")
  .map((monkey) => monkey.split("\n").map((line) => line.trimStart()))
  .map((monkey) => {
    let mon = {
      id: parseInt(monkey[0].replace("Monkey ", "").replace(":", "")),
      items: monkey[1]
        .replace("Starting items: ", "")
        .split(", ")
        .map((number) => parseInt(number)),
      operation: monkey[2].replace("Operation: new = old ", "").split(" "),
      test: parseInt(monkey[3].replace("Test: divisible by ", "")),
      true: parseInt(monkey[4].replace("If true: throw to monkey ", "")),
      false: parseInt(monkey[5].replace("If false: throw to monkey ", "")),
      inspectedCount: 0,
    };
    mon.operation = {
      op: mon.operation[0],
      val: mon.operation[1] === "old" ? "old" : parseInt(mon.operation[1]),
    };
    return mon;
  });

const rounds = 20;

for (let roundCounter = 0; roundCounter < rounds; roundCounter++) {
  data.forEach((monkey) => inspect(monkey));
}

function inspect(monkey) {
  let remove = [];
  for (let item in monkey.items) {
    if (monkey.operation.op === "*") {
      monkey.items[item] *=
        monkey.operation.val === "old"
          ? monkey.items[item]
          : monkey.operation.val;
    } else {
      monkey.items[item] +=
        monkey.operation.val === "old"
          ? monkey.items[item]
          : monkey.operation.val;
    }
    monkey.items[item] = Math.floor(monkey.items[item] / 3);
    if (monkey.items[item] % monkey.test === 0) {
      data[monkey.true].items.push(monkey.items[item]);
    } else {
      data[monkey.false].items.push(monkey.items[item]);
    }
    remove.push(monkey.items[item]);
    monkey.inspectedCount++;
  }
  for (let rem of remove) {
    monkey.items.splice(monkey.items.indexOf(rem), 1);
  }
}

const result = data
  .map((monkey) => monkey.inspectedCount)
  .sort((a, b) => a - b)
  .filter((val, i, arr) => val >= arr.at(-2))
  .reduce((prev, curr) => prev * curr);

console.log(result);
