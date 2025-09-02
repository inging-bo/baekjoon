const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]
const M = +input[1]
let ans = Array.from({length : N + 1}, () => Array.from({length : N + 1}, () => 0))
let visited = Array.from({length : N + 1}, () => Array.from({length : N + 1}, () => 0))
let node = Array.from({length : N + 1}, () => [])
console.log(visited)

for (let i = 2; i < M + 2; i++) {
  const [a, b, c] = input[i].split(" ").map(Number)
  ans[a][b] = c
  ans[b][a] = c
  node[a].push(b)
  node[b].push(a)
}

function deep(a, b) {
  console.log(ans[a][b])
}

for (let i = 1; i < N; i++) {
  for (let j = 0; j < node[i].length; j++) {
    deep(i, node[i][j])
  }
}
console.log(ans)
console.log(node)

