const { input } = require("./input");

const data = input
  .split("\n\n")
  .map((pair) => pair.split("\n").map((packet) => JSON.parse(packet)));

const result = data
  .map((packet, index) => (compare(packet[0], packet[1]) < 0 ? index + 1 : 0))
  .reduce((prev, curr) => (prev += curr));

console.log(result);

function compare(obj1, obj2) {
  if (typeof obj1 === "number" && typeof obj2 === "number") {
    return obj1 - obj2;
  }
  if (typeof obj1 === "object" && typeof obj2 === "object") {
    for (let i = 0; i !== obj1.length && i !== obj2.length; i++) {
      let comp = compare(obj1[i], obj2[i]);
      if (comp !== 0) {
        return comp;
      }
    }
    return obj1.length - obj2.length;
  }
  return typeof obj1 === "object"
    ? compare(obj1, [obj2])
    : compare([obj1], obj2);
}
