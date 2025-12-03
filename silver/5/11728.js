const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [sizeA, sizeB] = input[0].split(" ").map(Number)
const listA = input[1].split(" ").map(Number)
const listB = input[2].split(" ").map(Number)


const total = [...listA, ...listB]
console.log(total.sort((a,b) => a - b).join(" "))


