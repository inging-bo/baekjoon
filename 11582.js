const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let N = Number(input[0])
let arr = input[1].split(" ")
let people = Number(input[2])
let answer = []
const slice = (idx, count) => {
  console.log(idx * count, (idx + 1) * count)
  answer.push(...arr.slice(idx * count, (idx + 1) * count).sort((a,b) => a - b))
}

for (let i = 0; i < people; i++) {
  slice(i, N / people)
}
console.log(answer.join(" "))



