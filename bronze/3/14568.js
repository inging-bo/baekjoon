const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]
let one = 2
let answer = 0
for (let i = 1; i <= N; i++) {
  if (i % 2 === 0) {
    let num = N
    one = i
    num -= one
    if (num < 2) break
    let j = num
    
    while (j > 0) {
      let a = j - 2
      let b = num - a
      if (a > 0 && b > 0 && b - a >= 2) {
        answer++
      }
      j--
    }
  }
}
console.log(answer)
