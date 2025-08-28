const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [w1, h1, w2, h2] = input[0].split(" ").map(Number)

if (w1 - 1 > w2 && h1 - 1 > h2) {
  console.log(1)
} else {
  console.log(0)
}