const { input } = require('./input');
const array = Array(26);

let sum = 0;
for (let line of input) {
  array.fill(0);
  for (let i of line) {
    for (let character of i) {
      array[parseInt(character.charCodeAt(0) - 97)] += 1;
    }
  }
  array.forEach((number) => (sum += number === line.length ? 1 : 0));
}
console.log(sum);
