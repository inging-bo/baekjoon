const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const f = input[0].split("").sort()
const s = input[1].split("").sort()

const a = []
const b = []

// let count = 0
// for (let i = 0; i < f.length; i++){
//   if (!s.includes(f[i])) {
//     count++
//   } else {
//     a.push(f[i])
//   }
// }
// for (let i = 0; i < s.length; i++){
//   if (!f.includes(s[i])) {
//     count++
//   } else {
//     b.push(s[i])
//   }
// }

console.log(f)
console.log(s)



