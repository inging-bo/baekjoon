const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]
const M = +input[1]
let ans = Array.from({length : N + 1}, () => Array.from({length : N + 1}, () => 0))
let visited = Array.from({length : N + 1}, () => 0 )
let weight = Array.from({length : N + 1}, () => [])

for (let i = 2; i < M + 2; i++) {
  const [a, b, c] = input[i].split(" ").map(Number)
  ans[a][b] = c
  ans[b][a] = c
  weight[a].push(b)
  weight[b].push(a)
}

function deep(a, b) {
  console.log(a, b)
  
  
}

let find = 1
let queue = []
queue.push([1,0])
console.log(queue)
for (let i = 1; i < N; i++) {
  while (queue) {
    let [a, b] = queue.shift()
    weight[a][0], ans[a][weight[a][0]]
    
  }
}

console.log(ans)
console.log(weight)
