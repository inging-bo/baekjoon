const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
//
// const N = +input[0]
// let ans = []
// for (let i = 1; i <= N; i++) {
//   let n = +input[i]
//   let count = 0
//   for (let j = 1; j * j <= n; j++) {
//     if (n % j === 0) {
//       count++
//       if (j !== n / j) {
//         count++
//       }
//     }
//   }
//   ans.push([input[i], count])
// }
// console.log(ans.map(item => item.join(" ")).join("\n"))

let N = 100;
let factors = [];

for (let i = 2; i * i <= N; i++) {
  while (N % i === 0) {
    factors.push(i);
    N /= i;
  }
}
if (N > 1) factors.push(N);

console.log(factors.join("\n"));