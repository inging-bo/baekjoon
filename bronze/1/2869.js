const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [A, B, V] = input[0].split(' ').map(Number)

console.log(Math.ceil((V - A) / (A - B) + 1))
