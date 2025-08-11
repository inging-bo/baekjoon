const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0])

let arrs = []
let visits = []
let ans = 0
for (let i = 1; i <= N; i++) {
  let arr = input[i].split(" ").map(Number)
  let visit = Array.from({length : N} , () => 0)
  arrs.push(arr)
  visits.push(visit)
}

let x = 0
let y = 0
function dfs(x, y) {
  
  if (x > N - 1 || y > N - 1 || x < 0 || y < 0) {
    return
  }
  if (visits[x][y]) {
    return
  } else {
    visits[x][y] = 1
  }
  console.log(x, y)
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
console.log(visits)
if (ans === 0) {
  console.log("Hing")
} else {
  console.log("HaruHaru")
}


