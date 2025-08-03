const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0])

for (let i = 1; i <= N; i++) {
  let answer = 0
  let plus = 0
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "X") {
      plus = 0
    }
    if (input[i][j] === "O" && plus !== 0) {
      plus += 1
      answer += plus
    } else if (input[i][j] === "O" && plus === 0) {
      answer++
      plus += 1
    }
  }
  console.log(answer)
  answer = 0
  plus = 0
}

