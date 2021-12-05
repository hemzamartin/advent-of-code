const path = require('path');
const fs = require('fs');
const { INSPECT_MAX_BYTES } = require('buffer');

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((line) =>
    line.split('').map((character) => (character === '.' ? 0 : 1))
  );

module.exports = {
  input,
};
