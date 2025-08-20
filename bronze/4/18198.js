const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = input[0]
let score = {
  A : 0,
  B : 0
}
for (let i = 0; i < N.length; i++) {
  if (i % 2 === 0) {
    score[N[i]] += +N[i+1]
  }
}
console.log(score["A"] > score["B"] ? "A" : "B")
