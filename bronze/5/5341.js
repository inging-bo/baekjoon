const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let n = +input[i]
  let num = 0
  while (n > 0) {
    num += n
    n--
  }
  console.log(num)
  num = 0
}

