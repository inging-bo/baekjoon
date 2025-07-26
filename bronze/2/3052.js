const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let namerge = []

for (let i = 0; i < input.length; i++) {
  let N = Number(input[i])
  let div = N % 42
  if (!namerge.includes(div)) {
    namerge.push(div)
  }
}

console.log(namerge.length)