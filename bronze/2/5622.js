const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0].split("")
let count = 0
let num = {
  3 : ["A",'B','C'],
  4 : ["D",'E','F'],
  5 : ["G",'H','I'],
  6 : ["J",'K','L'],
  7 : ["M",'N','O'],
  8 : ["P",'Q','R','S'],
  9 : ["T",'U','V'],
  10 : ["W",'X','Y','Z'],
}

for (let i = 0 ; i < N.length; i++) {
  for ([key, value] of Object.entries(num)) {
    if (value.includes(N[i])) {
      count += Number(key)
    }
  }
}
console.log(count)