const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let A = BigInt(input[0])
let B = BigInt(input[1])

console.log(((A - B) / 2n + B).toString())
console.log(((A - B) / 2n).toString())


