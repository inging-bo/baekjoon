const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [A, B, C] = input[0].split(" ").map(Number)
const [a, b, c] = input[1].split(" ").map(Number)

let no = 0
let Aa = A - a
let Bb = B - b
let Cc = C - c
if (Aa < 0) {
  no += Aa
}
if (Bb < 0) {
  no += Bb
}
if (Cc < 0) {
  no += Cc
}
console.log(Math.abs(no))
