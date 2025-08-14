const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]
const str = 'WelcomeToSMUPC'
if (N % (str.length) === 0) {
  console.log("C")
} else {
  console.log(str[(N % (str.length)) - 1])
}


