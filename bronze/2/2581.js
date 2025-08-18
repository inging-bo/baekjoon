const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const M = +input[0]
const N = +input[1]

let min = []
for (let i = M; i <= N; i++) {

  let half = Math.ceil(i / 2)
  console.log(half)
  let j = 2
  while (half >= j) {
    if (half === j) {
      min.push(i)
    }
    if (i % j === 0) {
      break
    }
    j++
  }
}
if (min.length === 0) {
  console.log(-1)
} else {
  console.log(min.reduce((a,b) => a + b))
  console.log(Math.min(...min))
}




