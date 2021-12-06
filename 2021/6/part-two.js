const { input } = require('./input');

const days = [0, 0, 0, 0, 0, 0, 0, 0, 0];

// Init count
for (let fish of input) {
  days[fish]++;
}

// Count of fish on a new day
for (let i = 0; i < 256; i++) {
  let newFish = days[0];
  let tmp = days.shift();
  days[6] += tmp;
  days[8] = newFish;
}

console.log(days.reduce((prev, curr) => (prev += curr)));
