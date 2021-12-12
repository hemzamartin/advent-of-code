const { input } = require('./input');

const caves = {};
const paths = [];

parseInput();
console.log(caves);
getPath('start', 'start');
console.log(paths);
console.log(paths.length);

function parseInput() {
  for (let line of input) {
    const arrLine = line.split('-');
    if (typeof caves[arrLine[0]] === 'undefined') {
      caves[arrLine[0]] = [];
    }
    if (arrLine[1] !== 'start') caves[arrLine[0]].push(arrLine[1]);
    if (typeof caves[arrLine[1]] === 'undefined') {
      caves[arrLine[1]] = [];
    }
    if (arrLine[0] !== 'start') caves[arrLine[1]].push(arrLine[0]);
  }
}

function getPath(startFrom, path) {
  const curr = path;
  for (let availableCave of caves[startFrom]) {
    path = curr;
    if (availableCave === 'end') {
      path += String(`,${availableCave}`);
      paths.push(path);
      continue;
    }

    const checkPath = path.split(',');
    let smallCaveTwice = false;
    for (let cave of checkPath) {
      if (cave === cave.toLowerCase())
        if (checkPath.indexOf(cave) !== checkPath.lastIndexOf(cave))
          smallCaveTwice = true;
    }

    if (availableCave === availableCave.toLowerCase()) {
      if (smallCaveTwice && path.includes(availableCave)) {
        continue;
      }
    }
    path += String(`,${availableCave}`);
    getPath(availableCave, path);
  }
  return;
}
