const { input } = require('./input');

const commands = [];

for (let line of input) {
  commands.push(line.split(' '));
}

let horizontal = 0;
let vertical = 0;
let aim = 0;

for (let command of commands) {
  let value = parseInt(command[1], 10);
  switch (command[0]) {
    case 'forward':
      horizontal += value;
      vertical += value * aim;
      break;
    case 'up':
      aim -= value;
      break;
    case 'down':
      aim += value;
      break;
  }
}

console.log(horizontal, vertical, horizontal * vertical);
