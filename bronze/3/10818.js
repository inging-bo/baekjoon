const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0])
const arr = input[1].split(" ").map(Number)

let min = Infinity
let max = 0

for (let i = 0; i < N; i++) {

  if (arr[i] < min) min = arr[i]
  if (arr[i] > max) max = arr[i]
}
console.log(min, max)