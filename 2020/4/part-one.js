const { input } = require('./input');

const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

const parsedInput = input.map((line) => line.map((id) => id[0]));

let validCount = 0;
for (let passport of parsedInput) {
  let requiredCount = 0;
  for (let idR of required) {
    for (let id of passport) {
      if (id === idR) requiredCount++;
    }
  }
  if (requiredCount === required.length) validCount++;
}

console.log(validCount);
