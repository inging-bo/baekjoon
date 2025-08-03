const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0].split(" ").map(Number)
let arr = [1,1,2,2,2,8]

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] - N[i]
}
console.log(arr.join(" "))