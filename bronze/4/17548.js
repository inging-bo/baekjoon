const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const str = input[0]

let ans = []

for (let i = 0; i < str.length; i++) {
  if (str[i] === 'e') {
    ans.push(str[i])
  }
  ans.push(str[i])
}
console.log(ans.join(""))
