const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = +input[0]

let Case = []
let counts = []
function find(graph, floor, room) {
  let count = 0
  for (let i = 1; i <= room; i++) {
    count += graph[floor][i]
  }
  return count
}
for (let i = 1; i < input.length; i++) {
  Case.push(+input[i])
  if (Case.length === 2) {
    let [k, n] = Case // k = 1, n = 3
    let graph = Array.from({ length : k + 1}, () => Array(n + 1).fill(0))
    for (let i = 1; i <= n; i++) {
      graph[0][i] = i
    }
    for (let i = 1; i <= k; i++) {
      for (let j = 1; j <= n; j++) {
        graph[i][j] = find(graph, i - 1, j)
        if (i === k && j === n) {
          counts.push(graph[i][j])
        }
      }
    }
    Case = []
  }
}
console.log(counts.join('\n'))


