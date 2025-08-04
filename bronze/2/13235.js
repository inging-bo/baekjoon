const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0]

let mid = 0 + (N.length - 1) >> 1
console.log(mid)
for (let i = 1; i <= mid; i++) {
  if (N[mid + i] !== N[mid - i]) {
    console.log('false')
    return
  }
  
}
console.log('true')