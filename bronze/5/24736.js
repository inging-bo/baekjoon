const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let plus = [6, 3, 2, 1, 2]
let answer = []
for (let i = 0; i < input.length; i++) {
  let team = input[i].split(" ").map(Number)
  let score = 0
  for (let i = 0; i < team.length; i++) {
    score += team[i] * plus[i]
  }
  answer.push(score)
}
console.log(answer.join(" "))

