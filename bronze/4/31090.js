const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0])

let answer = []

for (let i = 1; i <= T; i++) {
  const N = Number(input[i].split("").slice(2).join(""))
  const nextYear = Number(input[i]) + 1
  if (nextYear % N === 0) {
    answer.push("Good")
  } else {
    answer.push("Bye")
  }
}
console.log(answer.join("\n"))