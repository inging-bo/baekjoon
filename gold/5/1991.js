const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const arr = Array.from({ length: N + 1 }, () => 0);

for (let i = 1; i <= N; i++) {
  arr[i] = +input[i];
}

let ans = [];

function dfs(start, cur, visited) {
  if (visited[cur]) {
    
    if (cur === start) ans.push(start);
    return;
  }
  visited[cur] = true;
  dfs(start, arr[cur], visited);
}

for (let i = 1; i <= N; i++) {
  let visited = Array(N + 1).fill(false);
  dfs(i, i, visited);
}

ans.sort((a, b) => a - b);
console.log(ans.length);
console.log(ans.join("\n"));