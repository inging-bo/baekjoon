const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = BigInt(input[0])
let Num = BigInt(input[1])
let sum = 0n

for (let i = N - 1n; i >= 0; i--) {
  let pow = 1n
  let j = 0n
  while (i > j) {
    pow = pow * 10n
    j++
  }
  sum += Num / pow
  Num = Num % pow
}
console.log(Number(sum))
