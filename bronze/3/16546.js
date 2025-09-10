const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]
const arr = input[1].split(" ").map(Number)
let index = Array.from({length : N}, () => 0)

for (let i = 0; i < arr.length; i++) {
  index[arr[i] - 1] = 1
}
console.log(index.indexOf(0) + 1)
