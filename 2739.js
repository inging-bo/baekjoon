const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const num = Number(input)
const answer = (i) => {
  console.log(String(num) ,"*", String(i), "=", String(num * i))
}
for (let i = 1; i <= 9; i++) {
  answer(i)
}


