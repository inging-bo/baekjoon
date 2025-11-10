const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]
const P = +input[1]

let answer
if (N < 5) {
  answer = P
} else if (N < 10 && N >= 5) {
  answer = P - 500
} else if (N < 15 ) {
  answer = Math.min(P * 0.9, P - 500)
} else if (N < 20) {
  answer = Math.min(P * 0.9, P - 2000)
} else if (N >= 20) {
  answer = Math.min(P * 0.75, P - 2000)
}
if (answer <= 0) {
  console.log(0)
} else {
  console.log(answer)
}
