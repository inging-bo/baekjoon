const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N , S] = input[0].split(" ").map(Number)

let visited = Array.from({length : N} , () => 0)
let answer = input[1].split(" ").map(Number)
let sum = 0
let count = 0
back(0)

function back(num) {

}

console.log(count)
