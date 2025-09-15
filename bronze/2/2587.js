const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = []
let sum = 0
for (let i = 0; i < input.length; i++) {
  let num = +input[i]
  arr.push(num)
  sum += num
}
arr.sort((a,b) => a - b)
console.log(sum / 5)
console.log(arr[2])








