const { input } = require('./input');
const commands = input.shift(input).split(',');
const boards = parseInput(input);
let win;

for (let command in commands) {
  for (let board of boards) {
    for (let line of board) {
      for (let number in line) {
        if (line[number] === commands[command]) line[number] = true;
      }
    }
  }

  do {
    win = checkBoards(boards);
    if (win !== false) {
      if (boards.length === 1) {
        console.log(boards[win]);
        let sum = 0;
        for (let line of boards[win]) {
          for (let number of line) {
            if (number !== true) sum += parseInt(number, 10);
          }
        }
        console.log(sum);
        console.log(commands[command]);

        console.log(sum * parseInt(commands[command], 10));
        return;
      }
      boards.splice(win, 1);
    }
  } while (win !== false);
}

function checkBoards(boards) {
  for (let board in boards) {
    for (let i = 0; i < 5; i++) {
      if (checkLine(boards[board][i]) || checkColumns(boards[board])) {
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

function checkColumns(board) {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (board[j][i] !== true) break;
      if (j === 4) return true;
    }
  }
  return false;
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
