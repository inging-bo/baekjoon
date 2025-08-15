const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const A = input[0]
const B = input[1]

console.log(B.indexOf('h') > A.indexOf('h') ? 'no' : 'go')


