const { input } = require('./input');

let gamma = [];
let epsilon = [];

for (let i = 0; i < input[0].length; i++) {
  let countOne = 0;
  let countZero = 0;
  for (let number of input) {
    if (number[i] == 1) countOne++;
    else if (number[i] == 0) countZero++;
  }
  gamma.push(countOne > countZero ? 1 : 0);
  epsilon.push(countOne > countZero ? 0 : 1);
}

const gammaDec = parseInt(gamma.join(''), 2);
const epsilonDec = parseInt(epsilon.join(''), 2);
console.log(gammaDec * epsilonDec);
