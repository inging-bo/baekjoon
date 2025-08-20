const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]

for (let i = 1; i <= N; i++) {
  if (input[i].slice(-1) !== ".") {
    console.log(`${input[i]}.`)
  } else {
    console.log(input[i])
  }
}