const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number)
let num = input[1].split(' ').map(Number)
let max = 0
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (let z = 0; z < N; z++) {
      if (i !== j && i !== z && j !== z) {
        let sum = num[i] + num[j] + num[z]
        if (sum <= M && sum > max) {
          max = sum
        }
      }
    }
  }
}
console.log(max)






