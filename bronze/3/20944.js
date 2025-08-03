const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0])

let answer = ""
for (let i = 0; i < N; i++) {
  answer += 'a'
}

console.log(answer)