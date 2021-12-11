const path = require('path');
const fs = require('fs');

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((number) => number.split('').map((bit) => parseInt(bit, 10)));
module.exports = {
  input,
};
