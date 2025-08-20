const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let year = new Date()
let month = year.getUTCMonth() + 1
console.log(year.getUTCFullYear())
console.log(month.toString().padStart(2, "0"))
console.log(year.getUTCDate().toString().padStart(2, "0"))
let N = 7
console.log((N * (N-1) * (N-2))/6)