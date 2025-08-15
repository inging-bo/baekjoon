const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let sort = []
for (let i = 0; i < input.length; i++) {
  let n = +input[i]
  sort.push(n)
}

console.log(sort.sort((a,b) => a - b)[1])

