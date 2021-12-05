const { input } = require('./input');

for (let i = 0; i < input.length - 2; i++) {
  for (let j = i + 1; j < input.length - 1; j++)
    for (let k = i + 2; k < input.length; k++)
      if (input[i] + input[j] + input[k] === 2020) {
        console.log(input[i] * input[j] * input[k]);
        return;
      }
}
