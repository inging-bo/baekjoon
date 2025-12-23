const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]
const list = input[1].split(" ").map(Number)

let cur = 1
let remain = N
let stack = []
for (let i = 0; i < list.length; i++) {
  if (cur === list[i]) {
    cur++
    continue
  }
  if (cur !== list[i] && remain === list[i]) {
    stack.push(list[i])
    remain--
  } else if (remain !== list[i]) {
    console.log("Sad")
    return
  }
}

for (let i = 1; i <= stack.length; i++) {
  if (cur === stack[stack.length - i]) {
    cur++
  } else {
    console.log("Sad")
    return
  }
}
console.log("Nice")

