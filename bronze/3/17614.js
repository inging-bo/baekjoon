const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let i = 1
let N = +input[0]
let obj = {
  '0': 0,
  '1': 0,
  '2': 0,
  '3': 0,
  '4': 0,
  '5': 0,
  '6': 0,
  '7': 0,
  '8': 0,
  '9': 0
}

while (i <= N) {
  let num = i.toString().split("").map(Number)
  for (let i = 0; i < num.length; i++) {
    obj[num[i]]++
  }
  i++
}

console.log(obj[3] + obj[6] + obj[9])
