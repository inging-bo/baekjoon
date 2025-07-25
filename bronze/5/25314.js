const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let q = Number(input[0]) / 4
let repeat = "long ".repeat(q) + "int"

console.log(repeat)