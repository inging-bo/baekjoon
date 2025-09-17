const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const M = +input[1];
const [start, arrive] = input[M + 2].split(" ").map(Number)

let node = Array.from({length : N + 1}, () => [])

for (let i = 2; i < input.length - 1; i++) {
  let [u, v, w] = input[i].split(" ").map(Number)
  node[u].push([v, w])
}
console.log(node)
let dist = Array(N + 1).fill(Infinity)
dist[start] = 0
let heap = []
function pushHeap(item) {

}

