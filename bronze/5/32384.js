const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let str = ""
for (let i = 0; i < Number(input[0]); i++) {
  str += 'LoveisKoreaUniversity'
  if (i !== Number(input[0] - 1)) str += " "
}
console.log(str)
