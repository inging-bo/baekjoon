const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let strs = input[0]
let ans = ""
for (const str of strs) {
  if (str.toUpperCase() === str) {
    ans += str.toLowerCase()
  } else if (str.toLowerCase() === str) {
    ans += str.toUpperCase()
  }
}
console.log(ans)

