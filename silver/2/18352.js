const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, K, X] = input[0].split(" ").map(Number)

// let weight = Array.from({length : N + 1}, () => Infinity)
// let node = Array.from({length : N + 1}, () => [])
//
// for (let i = 1; i < input.length; i++) {
//   let [A, B] = input[i].split(" ").map(Number)
//   node[A].push(B)
// }
// weight[X] = 0
//
// let head = 0
// let queue = []
// let ans = []
// queue.push([X, 0])
//
// while (head < queue.length) {
//   let [cur, dist] = queue[head++]
//   if (dist === K) {
//     ans.push(cur)
//   }
//   for (let num of node[cur]) {
//     if (weight[num] > dist + 1) {
//       weight[num] = dist + 1
//       queue.push([num,dist + 1])
//     }
//   }
// }
// if (ans.length > 0) {
//   ans.sort((a,b) => a - b)
//   console.log(ans.join("\n"))
// } else {
//   console.log(-1)
// }

let node = Array.from({length : N + 1}, () => [])
for (let i = 1; i < input.length; i++) {
  let [A, B] = input[i].split(" ").map(Number)
  node[A].push(B)
}

let visited = Array(N + 1).fill(false)
let dist = Array(N + 1).fill(0)

let queue = []
let head = 0;
let ans = []

queue.push(X)
visited[X] = true

while (head < queue.length) {
  let cur = queue[head++]
  
  for (let nod of node[cur]) {
    if (!visited[nod]) {
      visited[nod] = true
      dist[nod] = dist[cur] + 1
      queue.push(nod)
      if (dist[nod] === K) {
        ans.push(cur)
      }
    }
    
  }
}
if (ans.length > 0) {
  ans.sort((a,b) => a - b)
  console.log(ans.join("\n"))
} else {
  console.log(-1)
}
