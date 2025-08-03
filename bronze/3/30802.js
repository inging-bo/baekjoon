const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0])
const size = input[1].split(" ").map(Number)
const [T , P] = input[2].split(" ").map(Number)
let T_shirts = 0
let pens = [0, 0]
for (let i = 0; i < size.length; i++) {
  if (size[i] !== 0 && T >= size[i]) {
    T_shirts++
  } else if (T < size[i]) {
    T_shirts += Math.ceil(size[i] / T)
  }
}
pens[0] = Math.floor(N / P)
pens[1] = N % P
console.log(T_shirts)
console.log(pens.join(" "))
