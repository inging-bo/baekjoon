const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [V, E] = input[0].split(" ").map(Number)
const K = +input[1]

let node = Array.from({length : V + 1}, () => [])
for (let i = 2; i < input.length; i++) {
  let [u, v, w] = input[i].split(" ").map(Number)
  
  node[u].push([v, w])
}
let visited = Array(V + 1).fill(false)
let dist = Array(V + 1).fill(0)
let queue = []
let head = 0
queue.push(K)
while (head < queue.length) {
  let cur = queue[head++]
  for (let nod of node[cur]) {
    let [vv, ww] = nod
    if (!visited[vv]) {
      visited[vv] = true
      dist[vv] = dist[cur] + ww
      queue.push(vv)
    } else if (visited[vv] && dist[vv] > dist[cur] + ww) {
      dist[vv] = dist[cur] + ww
      queue.push(vv)
    }
  }
}
let ans = []
for (let i = 1; i < dist.length; i++) {
  if (dist[i] === 0 && i !== K) {
    ans.push('INF')
  } else {
    ans.push(dist[i])
  }
}

console.log(ans.join("\n"))
