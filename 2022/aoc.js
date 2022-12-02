const fs = require("fs");
const open = require("open");
const path = require("path");
const https = require("https");
const { exit } = require("process");

function openToday() {
  const day = new Date().getDate();
  const todayPath = "https://adventofcode.com/2022/day/" + day;
  const dir = path.join(
    __dirname,
    `day${(day.toString().length == 1 ? "0" : "") + day}`
  );
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    console.log(`Created ${path.basename(dir)}`);
    downloadInput(todayPath + "/input", path.join(dir, "/input.txt"));
    console.log(`Created ${path.basename(dir) + "/input.txt"}`);
    // part-one.js
    fs.copyFileSync(
      path.join(__dirname, "/template/part-one.js"),
      path.join(dir, "/part-one.js")
    );
    console.log(`Created ${path.basename(dir) + "/part-one.js"}`);
    // part-two.js
    fs.copyFileSync(
      path.join(__dirname, "/template/part-two.js"),
      path.join(dir, "/part-two.js")
    );
    console.log(`Created ${path.basename(dir) + "/part-two.js"}`);
    // Input.js
    fs.copyFileSync(
      path.join(__dirname, "/template/input.js"),
      path.join(dir, "/input.js")
    );
    console.log(`Created ${path.basename(dir) + "/input.js"}`);
  }
  open(todayPath);
}

function getSessionCookie() {
  const filePath = path.join(__dirname, "session_cookie.txt");
  if (fs.existsSync(filePath)) {
    const cookie = fs.readFileSync(filePath, "utf-8");
    return cookie;
  } else {
    console.log(
      "Create a file 'session_cookie.txt' containing your session cookie."
    );
    exit(0);
  }
}

function downloadInput(url, destination) {
  const inputFile = fs.createWriteStream(destination);
  var req = https.request(url, (response) => {
    response.pipe(inputFile);
  });
  req.setHeader("Cookie", [`session=${getSessionCookie()}`]);
  req.end();
  inputFile.on("finish", () => inputFile.close());
}

openToday();
