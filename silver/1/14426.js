const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function insert(root, word) {
  let node = root;
  for (const ch of word) {
    if (!node[ch]) node[ch] = {};
    node = node[ch];
  }
  node.end = true; // 단어 끝 표시
}

function startsWith(root, prefix) {
  let node = root;
  for (const ch of prefix) {
    if (!node[ch]) return false;
    node = node[ch];
  }
  return true;
}

// ----------------------
const [N, M] = input[0].split(" ").map(Number);
const root = {};

for (let i = 1; i <= N; i++) {
  insert(root, input[i]);
}
console.log(root)
let count = 0;
for (let j = N + 1; j <= N + M; j++) {
  if (startsWith(root, input[j])) count++;
}
console.log(count);

