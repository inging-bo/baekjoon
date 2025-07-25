const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = Number(input[0])
let arr = ""
for (let i = 1; i <= T; i++) {
  const [a,b] = input[i].split(" ").map(Number)
  arr += (a + b) + '\n'
}

console.log(arr)