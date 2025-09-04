const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]
const M = +input[1]
// let ans = Array.from({length : N + 1}, () => Array.from({length : N + 1}, () => 0))
// let visited = Array.from({length : N + 1}, () => 0 )
// let weight = Array.from({length : N + 1}, () => [])
//
// for (let i = 2; i < M + 2; i++) {
//   const [a, b, c] = input[i].split(" ").map(Number)
//   ans[a][b] = c
//   ans[b][a] = c
//   weight[a].push(b)
//   weight[b].push(a)
// }
//
// function deep(a, b) {
//   console.log(a, b)
//
//
// }
//
// let find = 1
// let queue = []
// // queue.push([1,0])
// // console.log(queue)
// // for (let i = 1; i < N; i++) {
// //   while (queue) {
// //     // let [a, b] = queue.shift()
// //     // weight[a][0], ans[a][weight[a][0]]
// //
// //   }
// // }
//
// console.log(ans)
// console.log(weight)
let sort = []
let parent = Array.from({length : N + 1}, (_,i) => i )
for (let i = 2; i < M + 2; i++) {
  let v = input[i].split(" ").map(Number)
  sort.push(v)
}
sort.sort((a,b) => a[2] - b[2])
let count = 0

function kruscal(a, b, c) {
  count += c
  for (let i = 1; i < parent.length; i++) {
    if (parent[i] === b) {
      parent[i] = a
    }
  }
}

for (let i = 0; i < sort.length; i++) {
  let [a, b, c] = sort[i]
  if (parent[a] === parent[b]) continue
  
  
  if (parent[a] < parent[b]) {
    kruscal(parent[a],parent[b], c)
  } else {
    kruscal(parent[b],parent[a], c)
  }
}

console.log(count)



























