const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]

let daSom = +input[1]
let remain = []
let count = 0
for (let i = 2; i < input.length; i++ ) {
  remain.push(+input[i])
}
remain.sort((a,b) => b - a)

while (daSom <= remain[0]) {
  remain[0] -= 1
  daSom += 1
  count++
  if (remain[0] !== Math.max(...remain)) {
    remain.sort((a,b) => b - a)
  }

}
console.log(count)




