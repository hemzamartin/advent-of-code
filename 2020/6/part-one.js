const { input } = require('./input');
const array = Array(26);
const parsedInput = input.map((line) => line.join(''));

let sum = 0;
for (let line of parsedInput) {
  array.fill(0);
  for (let character of line) {
    array[parseInt(character.charCodeAt(0) - 97)] = 1;
  }
  sum += array.reduce((a, b) => a + b);
}
console.log(sum);
