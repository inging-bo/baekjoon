const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, V] = input[0].split(" ").map(Number)

let nodes = Array.from({length : N + 1}, () => [])

for (let i = 1; i <= M; i++) {
  let [a , b] = input[i].split(" ").map(Number)
  nodes[a].push(b)
  nodes[b].push(a)
}

let visited = Array.from({length : N + 1}, () => false)
let visit = []

for (const node of nodes) {
  node.sort((a,b) => a - b)
}

function dfs(start) {
  visited[start] = true
  visit.push(start)

  for (const node of nodes[start]) {
    if (!visited[node]) {
      dfs(node)
    }
  }
}

dfs(V)
console.log(visit.join(" "))

function bfs(start) {
  visited = Array.from({length : N + 1}, () => false)
  visit = []
  let queue = [start]
  visit.push(queue[0])
  visited[start] = true

  while (queue.length) {
    let shift = queue.shift()
    for (const node of nodes[shift]) {
      if (!visited[node]) {
        visited[node] = true
        visit.push(node)
        queue.push(node)
      }
    }
  }
}

bfs(V)
console.log(visit.join(" "))