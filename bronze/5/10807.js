const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0])
const arr = input[1].split(" ").map(Number)
const f = Number(input[2])
let count = 0
for (let i = 0; i < N; i++) {
  if (arr[i] === f) count++
}
console.log(count)