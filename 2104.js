const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input[1].split(" ").map(Number);
const n = arr.length;

// 누적합 배열 만들기
const prefix = [0];
for (let i = 0; i < n; i++) {
  prefix[i + 1] = prefix[i] + arr[i];
}

// 단조 증가 스택으로 처리
let Max = 0;
const stack = [];

for (let i = 0; i <= n; i++) {
  const current = i < n ? arr[i] : 0;

  while (stack.length && arr[stack[stack.length - 1]] > current) {
    const idx = stack.pop();
    const height = arr[idx];
    const left = stack.length ? stack[stack.length - 1] + 1 : 0;
    const right = i - 1;

    const sum = prefix[right + 1] - prefix[left];
    Max = Math.max(Max, sum * height);
  }

  stack.push(i);
}

console.log(arr);



