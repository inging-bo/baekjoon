const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]

let n = input[1].split(" ").map(Number)

let count = 0
let answer = 0

for (let i = 0; i < N; i++) {
  if (n[i] === 1) {
    answer++
    count++
    let j = count
    while (j > 1) {
      answer++
      j--
    }
  } else {
    count = 0
  }
}
console.log(answer)
