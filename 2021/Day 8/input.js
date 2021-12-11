const path = require('path');
const fs = require('fs');

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map(function (line) {
    const segemnts = line.split(' | ');
    return { input: segemnts[0].split(' '), output: segemnts[1].split(' ') };
  });

module.exports = {
  input,
};
