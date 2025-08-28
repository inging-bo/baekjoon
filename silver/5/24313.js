const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [a1, a0] = input[0].split(" ").map(Number);
const c = +input[1];
const n0 = +input[2];

function f(n) {
  return a1 * n + a0;
}

function g(n) {
  return c * n;
}

// n0 이상 모든 n에서 f(n) ≤ g(n)인지 확인
let ok = true;
for (let n = n0; n <= 100; n++) { // 충분히 큰 범위까지 확인 (문제에서 보장)
  if (f(n) > g(n)) {
    ok = false;
    break;
  }
}

console.log(ok ? 1 : 0);
