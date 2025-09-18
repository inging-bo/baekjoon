const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0]
const m = +input[1]
let d = Array.from({length : n + 1}, () => [])
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i !== j) {
      d[i][j] = Infinity
    } else {
      d[i][j] = 0
    }
  }
}
for (let i = 2; i < input.length; i++) {
  let [a, b, c] = input[i].split(" ").map(Number)
  if (d[a][b] > c) {
    d[a][b] = c
  }
}
for (let m = 1; m <= n; m++) {
  for (let s = 1; s <= n; s++) {
    for (let e = 1; e <= n; e++) {
      if (d[s][e] > d[s][m] + d[m][e]) {
        d[s][e] = d[s][m] + d[m][e]
      }
    }
  }
}
let ans = []
for (let i = 1; i < d.length; i++) {
  let change = d[i].map(item => item === Infinity ? 0 : item)
  ans.push(change.slice(1))
}
console.log(ans.map(item => item.join(" ")).join("\n"))

