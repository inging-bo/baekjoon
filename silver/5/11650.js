const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]
let answer = []
for (let i = 1; i <= N; i++) {
  let pos = input[i].split(" ").map(Number)
  answer.push(pos)
}

console.log(answer.sort(([a,b],[c, d]) => {
  if ( a === c) {
    return b - d
  } else {
    return a - c
  }
}))





