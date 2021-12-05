const { parse } = require('path/posix');
const { pid } = require('process');
const { input } = require('./input');

const required = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

const parsedInput = input.map(function (line) {
  const passport = {};
  for (let key of line) {
    passport[key[0]] = key[1];
  }
  return passport;
});

let validCount = 0;
for (let passport of parsedInput) {
  let requiredCount = 0;
  for (let idR of required) {
    for (let id in passport) {
      if (id === idR) {
        let value = fieldsValid(idR, passport[id]);
        if (value) requiredCount++;
      }
    }
  }
  if (requiredCount === required.length) validCount++;
}

console.log(validCount);

function fieldsValid(key, value) {
  switch (key) {
    case 'byr':
      return byrValid(value);
    case 'iyr':
      return iyrValid(value);
    case 'eyr':
      return eyrValid(value);
    case 'hgt':
      return hgtValid(value);
    case 'hcl':
      return hclValid(value);
    case 'ecl':
      return eclValid(value);
    case 'pid':
      return pidValid(value);
  }
}

function byrValid(byr) {
  const value = parseInt(byr, 10);
  return value >= 1920 && value <= 2002;
}

function iyrValid(iyr) {
  const value = parseInt(iyr, 10);
  return value >= 2010 && value <= 2020;
}

function eyrValid(eyr) {
  const value = parseInt(eyr, 10);
  return value >= 2020 && value <= 2030;
}

function hgtValid(height) {
  if (height.includes('cm')) {
    const value = parseInt(height.replace('cm', ''), 10);
    return value >= 150 && value <= 193;
  } else if (height.includes('in')) {
    const value = parseInt(height.replace('in', ''), 10);
    return value >= 59 && value <= 76;
  }
  return false;
}

function hclValid(hcl) {
  const valid = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ];
  if (hcl[0] !== '#') return false;
  for (let i = 1; i < hcl.length; i++) {
    let found;
    for (let character of valid) if (hcl[i] === character) found = true;
    if (!found) return false;
  }
  if (hcl.length !== 7) return false;
  return true;
}

function eclValid(ecl) {
  const valid = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'];

  for (let val of valid) {
    if (ecl === val) return true;
  }
  return false;
}

function pidValid(pid) {
  if (pid.length !== 9) return false;
  for (let character of pid) {
    if (!(character >= '0' && character <= '9')) return false;
  }
  return true;
}
