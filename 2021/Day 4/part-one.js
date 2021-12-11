const { input } = require('./input');
const commands = input.shift(input).split(',');

const boards = parseInput(input);

for (let command of commands) {
  for (let board of boards) {
    for (let line of board) {
      for (let number in line) {
        if (line[number] === command) line[number] = true;
      }
    }
  }
  const win = checkBoards(boards);
  if (win !== false) {
    console.log(win);
    let sum = 0;
    for (let line of win) {
      for (let number of line) {
        if (number !== true) sum += parseInt(number, 10);
      }
    }
    console.log(sum);
    console.log(command);

    console.log(sum * parseInt(command, 10));
    break;
  }
}

function checkBoards(boards) {
  for (let board of boards) {
    for (let i = 0; i < 5; i++) {
      if (checkLine(board[i])) {
        return board;
      }
    }
  }
  return false;
}

function checkLine(line) {
  for (let number of line) {
    if (number !== true) return false;
  }
  return true;
}

function parseInput(input) {
  let boards = [];
  let index = -1;
  for (let line of input) {
    if (line === '') {
      boards.push([]);
      index++;
      continue;
    }
    boards[index].push(line.replace(/  +/g, ' ').trim().split(' '));
  }
  return boards;
}
