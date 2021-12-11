const { input } = require('./input');

let gamma = [...input];
let epsilon = [...input];

for (let i = 0; i < input[0].length; i++) {
  if (gamma.length == 1) {
    break;
  }
  let countOne = 0;
  let countZero = 0;
  for (let number of gamma) {
    if (number[i] == 1) countOne++;
    else if (number[i] == 0) countZero++;
  }

  console.log(
    `Bit: ${i + 1} Ones: ${countOne} Zeros: ${countZero}  Sum: ${
      countOne + countZero
    }`
  );

  let mostCommon = countOne >= countZero ? 1 : 0;
  for (let j = gamma.length - 1; j >= 0; j--) {
    if (gamma[j][i] != mostCommon) {
      gamma.splice(j, 1);
    }
  }
}

for (let i = 0; i < input[0].length; i++) {
  if (epsilon.length == 1) {
    break;
  }
  let countOne = 0;
  let countZero = 0;
  for (let number of epsilon) {
    if (number[i] == 1) countOne++;
    else if (number[i] == 0) countZero++;
  }
  let leastCommon = countOne >= countZero ? 0 : 1;

  for (let j = epsilon.length - 1; j >= 0; j--) {
    if (epsilon[j][i] != leastCommon) {
      epsilon.splice(j, 1);
    }
  }
}

console.log(gamma[0].join(''));
console.log(epsilon[0].join(''));

const gammaDec = parseInt(
  gamma.filter((number) => number[0] != 2)[0].join(''),
  2
);
const epsilonDec = parseInt(
  epsilon.filter((number) => number[0] != 2)[0].join(''),
  2
);

console.log(gammaDec);
console.log(epsilonDec);
console.log(gammaDec * epsilonDec);
