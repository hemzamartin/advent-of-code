const { input } = require('./input');

for (let i = 0; i < 80; i++) {
  for (let fish in input) {
    if (input[fish] === 0) {
      input[fish] = 6;
      input.push(8);
      continue;
    }
    input[fish]--;
  }
}

console.log(input.length);
