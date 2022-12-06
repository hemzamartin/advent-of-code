const { input } = require("./input");

let packetStart = [];

let length = 0;

for (let char of input) {
  packetStart.push(char);
  length++;
  if (packetStart.indexOf(char) !== packetStart.lastIndexOf(char)) {
    packetStart = packetStart.slice(packetStart.indexOf(char) + 1);
    continue;
  }
  if (packetStart.length === 14) {
    break;
  }
}

console.log(length);
