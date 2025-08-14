const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [R1, S] = input[0].split(" ").map(Number)
console.log((S * 2) - R1)