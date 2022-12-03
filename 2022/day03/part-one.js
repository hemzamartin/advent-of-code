const { input } = require("./input");

const data = input.split("\n").map((line) => line.split(""));

let sum = 0;

for (let row of data) {
  let duplicate = new Set();
  for (let i = 0; i < row.length / 2; i++) {
    for (let j = row.length / 2; j < row.length; j++) {
      if (row[i] === row[j]) {
        duplicate.add(row[i]);
      }
    }
  }
  duplicate.forEach((item) => {
    if (item === item.toLowerCase()) {
      sum += item.charCodeAt(0) - "a".charCodeAt(0) + 1;
    } else {
      sum += item.charCodeAt(0) - "A".charCodeAt(0) + 27;
    }
  });
}

console.log(sum);
