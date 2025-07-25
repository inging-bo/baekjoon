const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);

const prefixSum = Array(N + 1).fill(0);
for (let i = 0; i < N; i++) {
  prefixSum[i + 1] = prefixSum[i] + A[i];
}

let answer = 0;
const stack = [];

for (let i = 0; i <= N; i++) {
  const current = i === N ? -1 : A[i];
  
  while (stack.length && A[stack[stack.length - 1]] >= current) {
    const heightIdx = stack.pop();
    const height = A[heightIdx];
    
    const left = stack.length ? stack[stack.length - 1] + 1 : 0;
    const right = i - 1;
    
    const total = prefixSum[right + 1] - prefixSum[left];
    answer = Math.max(answer, total * height);
  }
  
  stack.push(i);
}

console.log(answer);



