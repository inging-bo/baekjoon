const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number)

let visited = Array.from({length:N + 1}, () => 0)
let ans = []
let arr = []
function back(depth) {
  if (depth === 0) {
    ans.push([...arr])
    return
  }
  let j = 1
  while (N >= j) {
    if (!visited[j]) {
      visited[j] = true
      arr.push(j)
      back(depth - 1)
      arr.pop()
      visited[j] = false
    }
    j++
  }
}
back(M)

console.log(ans)