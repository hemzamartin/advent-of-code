const { input } = require('./input');

input.sort((a, b) => a - b);

let highestValue = input[input.length - 1];
for (let i = 0; i < highestValue; i++) {
  const fuel = input
    .map((a) => Math.abs(a - i))
    .map((a) => (a ** 2 + a) / 2)
    .reduce((a, b) => a + b);

  if (!i) min = fuel;
  min = fuel < min ? fuel : min;
}

console.log(min);
