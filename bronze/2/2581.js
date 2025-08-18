const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const M = +input[0]
const N = +input[1]

let min = []
for (let i = M; i <= N; i++) {
  let j = 2
  while (i >= j) {
    if (i % j === 0) {
      break
    }
    j++
  }
  if (i === j) {
    min.push(i)
  }
}
if (min.length === 0) {
  console.log(-1)
} else {
  console.log(min.reduce((a,b) => a + b))
  console.log(min[0])
}




