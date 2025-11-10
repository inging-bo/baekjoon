const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const M = +input[1];

let dist = Array.from({length: N + 1}, () => Infinity)
let test = Array.from({length: N + 1}, () => [])

for (let i = 2; i < M + 2; i++) {
  let [a, b, c] = input[i].split(" ").map(Number)
  test[a].push([b, c])
  test[b].push([a, c])
}

console.log(test)