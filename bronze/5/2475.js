const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = input[0].split(" ").map(Number)
let sum = 0
for (let i = 0; i < N.length; i++) {
  sum += N[i] * N[i]
}
console.log(sum % 10)

