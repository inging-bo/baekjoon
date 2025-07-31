const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const q = input[0].split(" ")

let arr = []
let a = []

for (let i = 0; i < q.length; i++) {
  let split = q[i].split("")
  
  let j = split.length
  while (0 < j) {
    arr.push(split[j - 1])
    j--
  }
  a.push(Number(arr.join("")))
  arr = []
}

console.log(a[0] > a[1] ? a[0] : a[1])
