const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const one = input[0]
const two = input[1]
const three = input[2]
const oneNum = Number(input[0])
const twoNum = Number(input[1])
const threeNum = Number(input[2])

console.log(oneNum + twoNum - threeNum)
console.log(one + two - three)