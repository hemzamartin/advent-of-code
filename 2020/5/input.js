const path = require('path');
const fs = require('fs');
const { INSPECT_MAX_BYTES } = require('buffer');

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
  .toString()
  .trim()
  .split('\n');

module.exports = {
  input,
};
