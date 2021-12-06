const path = require('path');
const fs = require('fs');

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
  .toString()
  .trim()
  .split('\n')
  .map(function (line) {
    // 3-4 t: dttt
    const groups = line.split(' ');
    const minMax = groups[0].split('-').map((number) => parseInt(number, 10));
    const character = groups[1][0];
    return {
      min: minMax[0],
      max: minMax[1],
      character: character,
      pw: groups[2],
    };
  });

module.exports = {
  input,
};
