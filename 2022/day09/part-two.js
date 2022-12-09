const { input } = require("./input");

const data = input
  .split("\n")
  .map((line) => line.split(" "))
  .map((move) => ({ dir: move[0], val: parseInt(move[1]) }));

let rope = new Array(10).fill(null).map(() => Array(2).fill(0));
let head = rope[0];

const directions = { R: [1, 0], L: [-1, 0], U: [0, 1], D: [0, -1] };

let tailVisited = new Set();

for (let command of data) {
  for (let i = 0; i < command.val; i++) {
    head[0] += directions[command.dir][0];
    head[1] += directions[command.dir][1];
    for (let j = 0; j < rope.length - 1; j++) {
      updateTail(rope[j], rope[j + 1]);
    }
  }
}

function updateTail(head, tail) {
  let adjX = head[0] - tail[0];
  let adjY = head[1] - tail[1];
  if (Math.abs(adjX) >= 2) {
    tail[0] = head[0] + (adjX < 0 ? 1 : -1);
    tail[1] = head[1];
  } else if (Math.abs(adjY) >= 2) {
    tail[0] = head[0];
    tail[1] = head[1] + (adjY < 0 ? 1 : -1);
  }
  logTail(rope.slice(-1));
}

function logTail(tail) {
  tailVisited.add(`${tail[0]} ${tail[1]}`);
}

console.log(tailVisited.size);
