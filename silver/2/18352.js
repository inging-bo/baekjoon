const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, K, X] = input[0].split(" ").map(Number)

let weight = Array.from({length : N + 1}, () => Infinity)
let node = Array.from({length : N + 1}, () => [])

for (let i = 1; i < input.length; i++) {
  let [A, B] = input[i].split(" ").map(Number)
  node[A].push(B)
}