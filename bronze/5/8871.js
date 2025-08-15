
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = +input[0]
let min = 2*(n+1)
let max = 3*(n+1)
console.log(`${min} ${max}`)

