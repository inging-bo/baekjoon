const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0].split(" ").map(Number)
let useMoney = 0
for (const item of N) {
  switch (item) {
    case 1 :
      useMoney += 500
      break
    case 2 :
      useMoney += 800
      break
    case 3 :
      useMoney += 1000
      break
    default :
      break
  }
}

console.log(5000 - useMoney)

