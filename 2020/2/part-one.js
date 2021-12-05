const { input } = require('./input');

let valid = 0;

for (let line of input) {
  let countChar = 0;
  for (let character of line.pw) {
    if (character === line.character) countChar++;
  }
  if (countChar >= line.min && countChar <= line.max) valid++;
}

console.log(valid);
