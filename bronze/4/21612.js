const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const B = Number(input[0])

let p = 5 * B - 400
console.log(p)
if (p > 100) {
  console.log("-1")
} else if (p === 100) {
  console.log("0")
} else {
  console.log("1")
}
