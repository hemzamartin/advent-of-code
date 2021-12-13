const path = require('path');
const fs = require('fs');

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
  .toString()
  .trim()
  .split('\n\n');

const dots = input[0]
  .split('\n')
  .map((line) => line.split(',').map((number) => parseInt(number, 10)))
  .map((a) => (a = { x: a[0], y: a[1] }));
const folds = input[1]
  .split('\n')
  .map((line) => line.replace('fold along ', '').split('='))
  .map((a) => (a = { id: a[0], value: parseInt(a[1], 10) }));

module.exports = {
  dots,
  folds,
};
