const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = +input[0]
const study = input[1].split(" ").map(Number)
let ans = 0
let arr = Array.from({length : 5}, () => 0)

for (let i = 0; i < T; i++) {
  arr[i] = study[i]
}
if (arr[0] > arr[2]) {
  ans += (arr[0] - arr[2]) * 508
} else if (arr[0] <= arr[2] && arr[0] && arr[2]) {
  ans += (arr[2] - arr[0]) * 108
}
if (arr[1] > arr[3]) {
  ans += (arr[1] - arr[3]) * 212
} else if (arr[1] <= arr[3] && arr[1] && arr[3]) {
  ans += (arr[3] - arr[1]) * 305
}
if (arr[4]) {
  ans += arr[4] * 707
}
ans *= 4763
console.log(ans)
// console.log(((2 * 108) + (2*212) + (35*707)) * 4763)
