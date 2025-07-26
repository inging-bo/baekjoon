const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [year, month] = [2024, 8]

const N = Number(input[0])

for (let i = 1; i < N; i++) {
  if (month + 7 > 12) year++
  month = (month + 7) % 12
  if (month === 0) month = 12
}
console.log(year, month)