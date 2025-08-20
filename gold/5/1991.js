const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]

let visited = Array.from({length : N + 1}, () => 0)
let arr = Array.from({length : N + 1}, () => [])

for (let i = 1; i <= N; i++) {
  let num = +input[i]
  arr[i].push(num)
}
let ans = []

function dfs(num) {
  if (visited[num]) return
  visited[num] = true
  // 같은 곳 방문을 체크 하면 될 것 같은데
  if (!visited[arr[num]]) {
    dfs(arr[num])
  } else {
    ans.push(arr[num])
  }
}
for (let i = 1; i <= N; i++) {
  dfs(i)
}
console.log(visited)
console.log(ans.length)
console.log(ans)