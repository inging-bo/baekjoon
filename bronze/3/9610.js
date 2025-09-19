
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0]
let num = [0,0,0,0,0]
for (let i = 1; i < input.length; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  if (x > 0 && y > 0) num[0] += 1;
  if (x < 0 && y > 0) num[1] += 1;
  if (x < 0 && y < 0) num[2] += 1;
  if (x > 0 && y < 0) num[3] += 1;
  if (x === 0 || y === 0) num[4] += 1
}
let ans = []
for (let i = 0; i < num.length; i++) {
  if (i === num.length - 1) {
    ans.push(`AXIS: ${num[i]}`)
  } else {
    ans.push(`Q${i + 1}: ${num[i]}`)
  }
}
console.log(ans.join("\n"))