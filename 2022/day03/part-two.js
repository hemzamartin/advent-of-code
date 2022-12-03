const { input } = require("./input");

const data = input.split("\n").map((line) => line.split(""));

let sum = 0;

let badges = [];

for (let row = 0; row < data.length; row += 3) {
  for (let i = 0; i < data[row].length; i++) {
    let found = [false, false];
    for (let j = 0; j < data[row + 1].length; j++) {
      if (data[row][i] === data[row + 1][j]) {
        found[0] = true;
        break;
      }
    }
    for (let j = 0; j < data[row + 2].length; j++) {
      if (data[row][i] === data[row + 2][j]) {
        found[1] = true;
        break;
      }
    }
    if (found[0] && found[1]) {
      badges.push(data[row][i]);
      break;
    }
  }
}

badges.forEach((item) => {
  if (item === item.toLowerCase()) {
    sum += item.charCodeAt(0) - "a".charCodeAt(0) + 1;
  } else {
    sum += item.charCodeAt(0) - "A".charCodeAt(0) + 27;
  }
});

console.log(sum);
