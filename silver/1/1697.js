const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number)

let visited = Array(100001).fill(false)

let queue = []
let head = 0
queue.push([N, 0])

while (1) {
  let [cur, dist] = queue[head++]
  if (cur === K) {
    console.log(dist)
    return
  }
  for (let next of [cur - 1, cur + 1, cur * 2]) {
    if (next >= 0 && next <= 100001 && !visited[next]) {
      visited[next] = true
      queue.push([next, dist + 1])
    }
  }
}
