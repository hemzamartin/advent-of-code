const { input } = require("./input");

const data = input
  .split("\n")
  .map((line) => line.split("").map((char) => char.charCodeAt(0)));

let start, end;
data.forEach((el, indexY) => {
  let indexX;
  if ((indexX = el.indexOf("S".charCodeAt(0))) !== -1) {
    start = { x: indexX, y: indexY };
  }
  if ((indexX = el.indexOf("E".charCodeAt(0))) !== -1) {
    end = { x: indexX, y: indexY };
  }
});

data[start.y][start.x] = "a".charCodeAt(0);
data[end.y][end.x] = "z".charCodeAt(0);

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

let finalPath = [];
let queue = [];
let visited = [`${start.x} ${start.y}`];

queue.push([start]);

while (queue.length !== 0 && finalPath.length === 0) {
  let currentPath = queue.shift();
  let position = currentPath.at(-1);

  for (let dir of directions) {
    let newPos = { x: position.x + dir[0], y: position.y + dir[1] };
    if (!checkNode(position, newPos)) continue;
    if (newPos.x === end.x && newPos.y === end.y) {
      finalPath = currentPath;
    }
    visited.push(`${newPos.x} ${newPos.y}`);
    queue.push(currentPath.concat([newPos]));
  }
}

console.log(finalPath.length);

function checkNode(currentPos, newPos) {
  if (
    newPos.x < 0 ||
    newPos.x >= data[0].length ||
    newPos.y < 0 ||
    newPos.y >= data.length
  )
    return false;
  if (visited.includes(`${newPos.x} ${newPos.y}`)) return false;
  if (data[newPos.y][newPos.x] - data[currentPos.y][currentPos.x] > 1)
    return false;
  return true;
}
