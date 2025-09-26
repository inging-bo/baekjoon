const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]
const road = input[1].split(" ").map(Number)

let highLoad = [0]
let ans = []
for (let i = 0; i < road.length; i++) {
  let curLen = highLoad.length - 1
  if (highLoad[curLen] < road[i]) {
    highLoad.push(road[i])
  } else {
    ans.push(highLoad[curLen] - highLoad[1])
    highLoad = [0, road[i]]
  }
  if (i === road.length - 1) {
    ans.push(highLoad[highLoad.length - 1] - highLoad[1])
  }
}

console.log(Math.max(...ans))


