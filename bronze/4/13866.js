const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const Num = input[0].split(" ").map(Number)

let [A, B, C, D] = Num.sort((a,b) => b - a)

console.log(Math.abs((A + D) - (B + C)))




