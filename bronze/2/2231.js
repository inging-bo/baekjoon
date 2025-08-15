const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]

function divide(num) {
  return num.toString().split("").map(Number).reduce((acc, cur) => acc + cur)
}

let j = N
let ans = 0
let answer = []
while (0 < j) {
  ans = j + divide(j)
  if (ans === N) {
    answer.push(j)
  }
  j--
}
if (N === 1) {
  console.log(0)
} else if (answer.length === 0) {
  console.log(0)
} else {
  console.log(answer[answer.length - 1])
}












