const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];

function p(N) {
  if (N === 0) return 1
  console.log(N)
  return N + p(N - 1)
}




console.log(p(N))

