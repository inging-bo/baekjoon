const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const strs = input.join(" ").split(" ")
let real = strs.slice(1)
console.log(real.sort((a,b) => a.length - b.length))


