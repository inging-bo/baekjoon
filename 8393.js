const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let num = Number(input)
let answer = 0
while(num) {
  answer += num--
}
console.log(answer)