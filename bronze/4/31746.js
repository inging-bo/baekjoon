const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];

let str = "SciComLove"

if (N % 2 === 0) {
  console.log(str)
} else {
  console.log(str.split("").reverse().join(""))
}
