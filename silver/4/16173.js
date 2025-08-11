const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0])

let arrs = []
let ans = 0
for (let i = 1; i <= N; i++) {
  let arr = input[i].split(" ").map(Number)
  arrs.push(arr)
}

let x = 0
let y = 0
function dfs(x, y) {
  console.log(x, y)
  if (x > N - 1 || y > N - 1 || x < 0 || y < 0) {
    return
  }
  let num = arrs[x][y]
  if (num === -1)  {
    ans = 1
    return
  }
  if (x + num > N - 1 && y + num > N - 1) return
  dfs(x, y + num)
  dfs(x + num, y)
}
dfs(x,y)

if (ans === 0) {
  console.log("Hing")
} else {
  console.log("HaruHaru")
}


