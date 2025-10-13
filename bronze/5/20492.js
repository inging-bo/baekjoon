const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]

let full = (N * 0.80) + (N * 0.20 * 0.78)
let noFull = N * 0.78

console.log(noFull, full)


