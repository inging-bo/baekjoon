const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]
const str = input[1].split(" ")
let ans = []
for (let i = 0; i < N; i++) {
  ans.push(`${str[i]}DORO`)
}
console.log(ans.join(" "))

