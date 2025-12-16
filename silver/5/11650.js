const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]
let answer = []
let list = []
for (let i = 1; i <= N; i++) {
  let pos = input[i].split(" ").map(Number)
  list.push(pos)
}
answer = list.sort(([a,b],[c, d]) => {
  if ( b === d) {
    return a - c
  } else {
    return b - d
  }
})


answer.map(item => {
  console.log(item.join(" "))
})





