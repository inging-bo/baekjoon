const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = input[0].split("").map((item,i) => item !== "*" ? Number(item) : item)
let count = 0
let m = ["even","odd"]
let gop = 0
for (let i = 0; i < N.length; i++) {
  if (N[i] === "*") {
    gop = m[i % 2]
  } else {
    if (i % 2 !== 0) {
      N[i] *= 3
    }
    count += N[i]
  }
}
if (gop === "even") {
  console.log(10 - count % 10)
} else {
  for (let i = 0; i < 10; i++) {
    if ((count + Math.pow(i, 3)) % 10 === 0) {
      console.log(i * 3)
    }
  }
}
