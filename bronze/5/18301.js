const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n1, n2, n12] = input[0].split(" ").map(Number)

console.log(Math.floor((n1 + 1) * (n2 + 1) / (n12 + 1) - 1))


