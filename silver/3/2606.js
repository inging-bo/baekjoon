const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");


//인접 리스트형태로 변환하면 탐색이 쉬워진다.

const computers = Number(input[0])
const twins = Number(input[1])

let graph = Array.from({length : computers + 1}, () => [])
console.log(graph)

for (let i = 2; i < 2 + twins; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a); // 무방향 그래프니까 양쪽 다 연결
}

let visited = Array(computers + 1).fill(false);
let virus = [];

function dfs(node) {
  visited[node] = true;
  for (let next of graph[node]) {
    if (!visited[next]) {
      virus.push(next);
      dfs(next)
    }
  }
}

dfs(1)

function bfs(start) {
  let queue = [start];
  visited[start] = true;
  
  while (queue.length) {
    let node = queue.shift();
    for (let next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        virus.push(next);
        queue.push(next);
      }
    }
  }
}

bfs(1);
console.log(virus);


