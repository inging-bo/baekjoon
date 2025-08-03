const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0])
const num = input[1].split(" ").map(Number)
let count = N
for (let i = 0; i < N; i++) {
  if (num[i] === 1 ) {
    count--
  }
  for (let j = 2; j < num[i]; j++) {
    if (num[i] % j === 0) {
      count--
      break
    }
  }
}
console.log(count)

