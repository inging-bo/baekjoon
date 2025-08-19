const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [x, y, w, h] = input[0].split(' ').map(Number)

console.log(Math.min(w - x , x, h - y, y))