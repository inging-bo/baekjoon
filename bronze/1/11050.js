const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number)
function C(n, k) {
  console.log(n,k)
  if (k === 0 || k === n) return 1;
  return C(n - 1, k - 1) + C(n - 1, k); // 파스칼의 공식
}

console.log(C(N, K))

// let visited = Array.from({length : N + 1}, () => false)
// let queue = []
// let count = 0
// function back(num) {
//   if (queue.length === depth) {
//     count++
//     return
//   }
//   let i = num
//   while (i <= N) {
//     if (!visited[i]) {
//       visited[i] = true
//       queue.push(i)
//       back(i + 1)
//       visited[i] = false
//       queue.pop()
//     }
//     i++
//   }
// }
//
// back(1)
//
// console.log(count)