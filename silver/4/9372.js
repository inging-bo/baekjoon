const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0])
let idx = 1
for (let i = 0; i < T; i++) {
  let [N, M] = input[idx].split(" ").map(Number)
  console.log(N - 1)
  idx += M + 1
}
