const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [T, X] = input[0].split(" ").map(Number)
const N = +input[1]

for (let i = 2; i < N * 2 + 2; i++) {
  let time = input[i + 1].split(" ").map(Number)
  let count = 0
  for (let j = 0; j < +input[i]; j++) {
    if (time[j] === X) {
      count++
    }
  }
  if (!count) {
    console.log("NO")
    return
  }
  i++
}

console.log("YES")

