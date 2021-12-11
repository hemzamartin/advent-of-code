const { input } = require('./input');

let horizontal = 0;
let vertical = 0;

for (let command of input) {
  let value = parseInt(command[1], 10);
  switch (command[0]) {
    case 'forward':
      horizontal += value;
      break;
    case 'up':
      vertical -= value;
      break;
    case 'down':
      vertical += value;
      break;
  }
}

console.log(horizontal, vertical, horizontal * vertical);
