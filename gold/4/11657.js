const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number)

let time = Array.from({length : N + 1 }, () => Infinity)
let node = Array.from({length : N + 1 }, () => Array(M + 1).fill([]))

time[1] = 0

for (let i = 1; i < input.length; i++) {
  let [A, B, C] = input[i].split(" ").map(Number)
  
  node[A][B] = C
}
console.log("time" , time)
console.log("node" , node)

for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= M; j++) {
    if (i !== j) {
      if (time[j] > node[i][j] && node[i][j].length !== 0) {
        console.log(time[j] , node[i][j])
        time[j] = node[i][j]
      }
    }
  }
}
console.log(time)


