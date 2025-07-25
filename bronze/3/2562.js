const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input.length

let max = Number(input[0])
let idx = 0
for (let i = 1; i <= N; i++) {
  let t = Number(input[i])
  if (max < t) {
    max = t
    idx = i
  }
}
console.log(max)
console.log(idx + 1)