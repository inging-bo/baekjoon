const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let [boy, girl] = input[i].split(" ").map(Number)
  console.log(boy + girl)
}

