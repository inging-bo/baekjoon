const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let submit = []
for (let i = 0; i < 28; i++) {
  let student = Number(input[i])
  submit.push(student)
}

for (let i = 1; i <= input.length; i++) {
  if (!submit.includes(i)) {
    console.log(i)
  }
}

console.log(submit)