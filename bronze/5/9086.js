const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let S = Number(input[0])

for (let i = 1; i <= S; i++) {
  let str = input[i]
  let answer = ""
  answer += str[0]
  answer += str[str.length - 1]
  console.log(answer)
}

