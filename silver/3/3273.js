const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0]
const number = input[1].split(" ").map(Number)
const x = +input[2]
let answer = 0
for (let i = 0; i <= n; i++) {
  for (let j = i; j <= n; j++) {
    if (i === j) continue
    if (number[i] + number[j] === x) {
      answer++
    }
  }
}
console.log(answer)