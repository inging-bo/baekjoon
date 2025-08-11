const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0])
let j = N - 1
let ans = N
if ( N === 0 ) {
  console.log('1')
  return
}
while (j > 0) {
  console.log(ans, j)
  ans *= j
  j--
}

console.log(ans)