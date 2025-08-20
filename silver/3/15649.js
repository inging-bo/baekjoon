const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number)

let visited = Array.from({length : N + 1} , () => false)
let arr = []
let ans = []
function back(depth) {
  if (depth === 0) {
    ans.push([...arr])
    return
  }
  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true
      arr.push(i)
      back(depth - 1)
      arr.pop()
      visited[i] = false
    }
  }
}
back(M)
console.log(ans.map(arr => arr.join(" ")).join("\n"))


