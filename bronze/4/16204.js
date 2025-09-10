const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M, K] = input[0].split(" ").map(Number)

let oneSort = [M, K].sort((a,b) => a - b)
let twoSort = [N - M, N - K].sort((a,b) => a - b)
let one = oneSort[0]
let two = twoSort[0]
console.log(one + two)

