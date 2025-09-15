const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const [N, M] = input[0].split(" ").map(Number)

// let visited = Array.from({length:N + 1}, () => 0)
// let ans = []
// let arr = []
// function back(first, depth) {
//   if (depth === 0) {
//     ans.push([...arr])
//     return
//   }
//   let j = first
//   while (N >= j) {
//     if (!visited[j]) {
//       visited[j] = true
//       arr.push(j)
//       back(j, depth - 1)
//       arr.pop()
//       visited[j] = false
//     }
//     j++
//   }
// }
// back(1, M)
// console.log(ans.map(item => item.join(" ")).join("\n"))

let arrs = [1, 2, 3]

let visited = Array.from({length:arrs.length}, () => 0)

function combination(n, r) {
  console.log(n, r)
  if (n === r || r === 0) {
    return 1
  } else {
    return combination(n - 1, r - 1) + combination(n - 1, r)
  }
}

console.log(combination(3, 2))

// function print(arr, visited) {
//   for (let i = 0; i < arr.length; i++) {
//     if (visited[i] === true) {
//       console.log(arr[i] + " ")
//     }
//   }
// }
//
// function comb1(arr, visited, start, r) {
//   if (r === 0) {
//     print(arr, visited)
//   } else {
//     for (let i = start; i < arr.length; i++) {
//       visited[i] = true;
//       comb1(arr, visited, i + 1, r - 1);
//       visited[i] = false
//     }
//   }
//
// }
//
// for (let r = 1; r <= arrs.length; r++) {
//   console.log("\n" + arrs.length + "개 중에 " + r + "개 뽑음");
//   comb1(arrs, visited, 0, r);
// }
