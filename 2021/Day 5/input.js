const path = require('path');
const fs = require('fs');

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map((line) =>
    line
      .split(' -> ')
      .map((coordinates) =>
        coordinates.split(',').map((value) => parseInt(value))
      )
  );

module.exports = {
  input,
};
