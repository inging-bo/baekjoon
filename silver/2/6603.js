const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input.length - 1;
let ans = []
let total = []
let arr = []

function back(start, depth, num, visited) {
  console.log(arr)
  if (depth === 6) {
    total.push([...arr])
    return
  }
  for (let i = start; i < num.length; i++) {
    if (!visited[i]) {
      visited[i] = true
      arr.push(num[i])
      back(i + 1, depth + 1, num, visited)
      arr.pop()
      visited[i] = false
    }
  }
}

for (let i = 0; i < N; i++) {
  let num = input[i].split(" ").map(Number)
  let visited = Array.from({length : num[0] + 1}, () => 0)
  arr = []
  total = []
  back(1,0, num, visited)
  ans.push(total)
}
for (let i = 0; i < ans.length; i++) {
  console.log(ans[i].map(item => item.join(" ")).join("\n"))
  if (i !== ans.length - 1) {
    console.log(' ')
  }
}
