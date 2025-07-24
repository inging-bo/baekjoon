const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = Number(input[0])

for (let i = 1; i <= T; i++) {
  const [a,b] = input[i].split(" ").map(Number)
  console.log(`Case #${i}: ${a} + ${b} = ${a+b}`)
}