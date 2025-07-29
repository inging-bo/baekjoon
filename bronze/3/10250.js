const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0])

let floor = 100
let room = 1

for (let i = 1; i <= T; i++) {
  const [H , W, N] = input[i].split(" ").map(Number)
  if (Math.floor(N / H) === N / H) {
    room *= N / H
  } else {
    room *= Math.floor(N / H) + 1
  }
  floor *= N % H === 0 ? H : N % H
  console.log(floor + room)
  floor = 100
  room = 1
}