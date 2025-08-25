const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number)

let arr = []


for (let i = 1; i <= N; i++) {
  arr.push(i)
}
let j = N
let queue = 0
let ans = []
while (arr.length) {
  queue = (queue + K - 1) % arr.length
  let num = arr.splice(queue,1)
  ans.push(...num)
  j--
}
console.log(`<${ans.join(", ")}>`)


