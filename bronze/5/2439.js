const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0])
for (let i = 1; i <= N; i++) {
  let str = ""
  let j = N
  while (0 < j) {
    if (j <= i) {
      str += "*"
    } else {
      str += " "
    }
    j--
  }
  console.log(str)
}

