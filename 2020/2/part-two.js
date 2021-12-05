const { input } = require('./input');

let valid = 0;

for (let line of input) {
  const index1 = line.min - 1;
  const index2 = line.max - 1;
  if (
    line.pw[index1] !== line.pw[index2] &&
    (line.pw[index1] === line.character || line.pw[index2] === line.character)
  )
    valid++;
}

console.log(valid);
