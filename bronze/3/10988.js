const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0]
let mid = N.length >> 1

let answer = '1'
for (let i = 0; i < mid; i++) {
  let left = N.slice(i, i + 1)
  let right = N.slice(N.length - 1 - i, N.length - i)

  if (left !== right) {
    answer = '0'
  }
}
console.log(answer)