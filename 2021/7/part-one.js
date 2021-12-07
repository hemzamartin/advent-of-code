const { input } = require('./input');

input.sort((a, b) => a - b);
const middle = input[input.length - input.length / 2];

const fuel = input.map((a) => Math.abs(a - middle)).reduce((a, b) => a + b);
console.log(fuel);
