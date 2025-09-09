const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [L, C] = input[0].split(" ").map(Number)
const num = input[1].split(" ").sort()

let ans = []
let arr = []
let mo = ['a','e','i','o','u']
let visited = Array.from({length : C + 1}, () => 0)
function back(start, depth) {
  if (depth === L && arr.filter(item => mo.includes(item)).length > 0 && arr.filter(item => !mo.includes(item)).length > 1) {
    ans.push([...arr])
  }
  let j = start
  while (C >= j) {
    if (!visited[j]) {
      visited[j] = true
      arr.push(num[j - 1])
      back(j + 1, depth + 1)
      arr.pop()
      visited[j] = false
    }
    j++
  }
}
back(1, 0)

console.log(ans.map(item => item.join("")).join('\n'))
