const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let submit = []

for (let i = 0; i < input.length; i++) {
  let student = Number(input[i])
  submit.push(student)
}