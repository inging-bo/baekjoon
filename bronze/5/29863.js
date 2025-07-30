const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let H = Number(input[0])
let HH = Number(input[1])
if (H >= 20) {
  console.log((24 - H) + HH)
} else {
  console.log(HH - H )
}

