const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number)


let counts = []
let black = "BWBWBWBW"
let white = "WBWBWBWB"
for (let i = 1; i <= N - 7; i++) {
  for (let j = 0; j < K - 7; j++) {
    let blackCount = 0
    let whiteCount = 0
    for (let ii = i; ii < 8 + i; ii++) {
      let k = 0
      for (let jj = j; jj < 8 + j; jj++) {
        if (input[ii][jj] !== black[k]) {
          blackCount++
        }
        if (input[ii][jj] !== white[k]) {
          whiteCount++
        }
        k++
      }
      let temp = black
      black = white
      white = temp
    }
    counts.push(blackCount, whiteCount)
  }
}
console.log(Math.min(...counts))





