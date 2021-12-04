const path = require('path');
const fs = require('fs');

const input = fs
  .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
  .toString()
  .trim()
  .split('\n');

// for (let i = input.length - 1; i >= 0; i--) {
//   if (input[i] === '') {
//     input.splice(i, 1);
//   }
// }
module.exports = {
  input,
};
