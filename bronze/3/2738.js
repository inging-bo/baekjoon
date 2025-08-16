const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number)
let A = []
let B = []
let ans = []
for (let i = 1; i <= N; i++ ) {
  A.push(input[i].split(" ").map(Number))
}
for (let i = N + 1; i <= N + N; i++ ) {
  B.push(input[i].split(" ").map(Number))
}
for (let i = 0; i < N; i++) {
  let arr = []
  for (let j = 0; j < M; j++) {
    arr.push(A[i][j] + B[i][j])
  }
  console.log(arr.join(" "))
}