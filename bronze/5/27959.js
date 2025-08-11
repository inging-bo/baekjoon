const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number)
let haveMoney = N * 100
if (haveMoney >= M) {
  console.log("Yes")
} else {
  console.log("No")
}

