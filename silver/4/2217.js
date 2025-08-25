const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0])
let arr = []
let ans = []
for (let i = 1; i <= N; i++) {
  arr.push(+input[i])
}
arr.sort((a,b) => b - a)

for (let i = 0; i < arr.length; i++) {
  ans.push(arr[i])
  
  let min = ans[ans.length - 1]
  if (min * ans.length > arr[i - 1] * (ans.length - 1) && i !== 0) {
    console.log(min * ans.length)
    return
  }
}



