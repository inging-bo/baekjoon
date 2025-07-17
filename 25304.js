const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const all = Number(input[0])

let real = 0
for (let i = 2; i < input.length; i++) {
  let [pay, count] = input[i].split(" ")
  real += Number(pay) * Number(count)
}

console.log(real === all)