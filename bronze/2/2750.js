const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]
let index = Array.from({length : N + 1}, () => Infinity)

function priority(num) {
  let cur = +input[num]
  let j = 1
  while (j <= N) {
    if (cur === index[j]) break
    if (cur < index[j]) {
      [cur , index[j]] = [index[j], cur]
    }
    j++
  }
}

for (let i = 1; i < input.length; i++) {
  priority(i)
}
console.log(index.slice(1).join("\n"))






