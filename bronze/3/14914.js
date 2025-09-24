const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number)
let min = N > K ? K : N
let ans = []
for (let i = 1; i <= min; i++) {
  for (let j = 1; j <= N; j++) {
    for (let k = 1; k <= K; k++) {
      if (i * j + i * k === N + K && i * j === N && i * k === K) {
        ans.push([i, j, k])
      }
    }
  }
}
console.log(ans.map(item => item.join(" ")).join("\n"))

