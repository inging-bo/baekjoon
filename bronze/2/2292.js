const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = BigInt(input[0])
let j = 1n
let i = 1n
while (N > j) {
  j += 6n * i
  i++
}
console.log(i.toString())








