const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number)

let ans = []
let visited = []

let arr = Array.from({length : N} ,(_, i) => i + 1)
function back(num, depth, arr) {
  console.log(arr)
  if (depth === 0) return
  for (let i = 1; i < num; i++) {
    
    back(num, depth - 1, arr.filter(item => item !== i))
  }
  
}
back(N, M, arr)





