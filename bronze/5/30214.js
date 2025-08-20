const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [S1, S2] = input[0].split(" ").map(Number)

if (S2 / 2 <= S1) {
  console.log("E")
} else {
  console.log("H")
}
