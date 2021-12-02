const { input } = require('./input');

const commands = [];

for (let line of input) {
  commands.push(line.split(' '));
}

let horizontal = 0;
let vertical = 0;

for (let command of commands) {
  switch (command[0]) {
    case 'forward':
      horizontal += parseInt(command[1], 10);
      break;
    case 'up':
      vertical -= parseInt(command[1], 10);
      break;
    case 'down':
      vertical += parseInt(command[1], 10);
      break;
  }
}

console.log(horizontal, vertical, horizontal * vertical);
