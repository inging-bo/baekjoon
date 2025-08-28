const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]
const arr = input[1].split(' ').map(item => item / 100)

let b = 0
for (let i = 0; i < N; i++) {
  b = 1 - (1 - b)*(1 - arr[i])
  console.log(b * 100)
}
