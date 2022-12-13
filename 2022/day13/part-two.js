const { input } = require("./input");

const data = input
  .split("\n\n")
  .map((pair) => pair.split("\n").map((packet) => JSON.parse(packet)));

const result = data
  .flat()
  .concat([[[2]], [[6]]])
  .sort(compare)
  .map((item, index) => ({ item: item, index: index + 1 }))
  .filter(
    (item) =>
      JSON.stringify(item.item) === "[[2]]" ||
      JSON.stringify(item.item) === "[[6]]"
  )
  .reduce((prev, curr) => prev * curr.index, 1);

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
