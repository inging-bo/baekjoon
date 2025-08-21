const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]

for (let i = 0; i < (input.length -1) / 2; i++) {
  let num = +input[(i * 2) + 1]
  let node = input[(i * 2) + 2].split(" ").map(Number)
  let line = Array.from({length : num + 1}, () => [])
  let visited = Array.from({length : num + 1}, () => false)
  let ans = []
  for (let j = 1; j <= num; j++) {
    line[j].push(node[j - 1])
  }
  console.log(line)
  function dfs(n) {
    if (visited[n]) return
    visited[n] = true
    
    if (!visited[line[n]]) {
      dfs(line[n])
    } else {
      ans.push(line[n])
    }
  }
  for (let i = 1 ; i <= num; i++) {
    dfs([i])
  }
  console.log(ans.length)
}

