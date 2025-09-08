const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]
let first = +input[1]
let count = 2
let Case = 1
for (let i = 0; i < N; i++) {
  console.log(`Case ${Case}:`)
  for (let j = 0; j < first; j++) {
    let num = +input[count]
    if (num !== 6) {
      console.log(++num)
    }
    count++
  }
  Case++
  first = +input[count++]
}
