const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]

let A = 2
let B = 1
let C = 2
for (let i = 2; i <= 9; i++) {
  while (B <= 9) {
      if (N === A || N === B || N === C) {
        console.log(1)
        return
      }
      B++
      C = A * B
  }
  A++
  B = 1
  C = A
}
console.log(0)
return