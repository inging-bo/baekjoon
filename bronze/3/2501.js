const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number)
let j = 1
let count = 0
while (N >= j) {
    if (N % j === 0) {
      count++
    }
    if (count === K) {
      console.log(j)
      return
    }
    j++
}
console.log(0)
