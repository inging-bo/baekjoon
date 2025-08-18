const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]
let direction = 1
let count = 0
let ans = []
for (let i = 0; i < N; i++) {
  direction = !direction
  for (let j = 0; j < i + 1; j++) {
      count++
      if (count === N) {
        if (direction) {
          ans.push(j + 1, i - j + 1)
        } else {
          ans.push(i - j + 1, j + 1)
        }
        console.log(ans.join("/"))
        return
      }
  }
}
