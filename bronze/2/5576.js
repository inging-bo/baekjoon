const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let W = []
let K = []
for (let i = 0; i < input.length; i++) {
  if (i < 10) {
    W.push(+input[i])
  } else {
    K.push(+input[i])
  }
}
let wSort= W.sort((a,b) => a - b)
let kSort= K.sort((a,b) => a - b)

console.log((wSort[7] + wSort[8] + wSort[9]),(kSort[7] + kSort[8] + kSort[9]))










