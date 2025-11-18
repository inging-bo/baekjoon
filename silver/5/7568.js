const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]

let answer = []

for (let i = 1; i <= N; i++) {
  answer.push(input[i].split(" ").map(Number))
}

console.log(answer)

let kg = []
let cm = []
let kg_cm = {}
for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(" ").map(Number)
  kg.push(x)
  cm.push(y)
}
console.log(kg.sort((a,b) => b - a), cm.sort((a,b) => b - a))