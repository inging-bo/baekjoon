const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = input[0].split(" ").map(Number)

console.log(T[0] >= T[1] ? T[1] : T[0])

