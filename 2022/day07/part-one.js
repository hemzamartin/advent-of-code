const { input } = require("./input");

const data = input.split("\n").map((line) => {
  let terms = line.split(" ");
  let output = {};
  if (terms.length === 3) {
    output["type"] = "cd";
    output["value"] = terms[2];
    output["size"] = undefined;
  } else if (terms[0] === "$") {
    output["type"] = "ls";
    output["value"] = undefined;
    output["size"] = undefined;
  } else if (terms[0] === "dir") {
    output["type"] = "dir";
    output["value"] = terms[1];
    output["size"] = undefined;
  } else {
    output["type"] = "file";
    output["value"] = terms[1];
    output["size"] = parseInt(terms[0]);
  }
  return output;
});

let root = { type: "dir", name: "/", content: [] };
let currentDir = root;
for (let line of data) {
  if (line.type === "cd") {
    if (line.value === "/") {
      currentDir = root;
    } else if (line.value === "..") {
      currentDir = currentDir.parent;
    } else {
      currentDir = currentDir.content.find((item) => item.name === line.value);
    }
  } else if (line.type === "dir") {
    if (!currentDir.content.some((item) => item.name === line.value)) {
      currentDir.content.push({
        type: "dir",
        name: line.value,
        content: [],
        parent: currentDir,
      });
    }
  } else if (line.type === "file") {
    if (!currentDir.content.some((item) => item.name === line.value)) {
      currentDir.content.push({
        type: "file",
        name: line.value,
        size: line.size,
      });
    }
  }
}

function sumDir(dir) {
  let sum = 0;
  for (let con of dir.content) {
    if (con.type === "dir") {
      con.size = sumDir(con);
      sum += con.size;
    } else if (con.type === "file") {
      sum += con.size;
    }
  }
  return sum;
}

function partOne(dir) {
  let sum = 0;
  for (let con of dir.content) {
    if (con.type === "dir") {
      if (con.size <= 100000) {
        sum += con.size;
      }
      sum += partOne(con);
    }
  }
  return sum;
}

sumDir(root);
console.log(partOne(root));
