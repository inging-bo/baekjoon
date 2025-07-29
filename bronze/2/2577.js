const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let Nums = input.map(Number)
let sum = Nums.reduce((acc, cur) => acc * cur)
let sumStr = String(sum)
let num = {
  "0" : 0,
  "1" : 0,
  "2" : 0,
  "3" : 0,
  "4" : 0,
  "5" : 0,
  "6" : 0,
  "7" : 0,
  "8" : 0,
  "9" : 0,
}

for (let i = 0 ; i < sumStr.length; i++) {
  num[sumStr[i]] += 1
}
for (let i = 0 ; i < 10; i++) {
  console.log(num[i])
}