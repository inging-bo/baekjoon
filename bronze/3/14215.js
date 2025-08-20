const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [A, B, C] = input[0].split(" ").map(Number).sort((a,b)=> b-a)

while (A >= B + C) {
  A--
}
console.log(A + B + C)

