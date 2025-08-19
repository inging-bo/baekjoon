const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]
let posX = []
let posY = []
for (let i = 1; i <= N; i++) {
  let [x, y] = input[i].split(" ").map(Number)
  posX.push(x)
  posY.push(y)
}
let minX = Math.min(...posX)
let minY = Math.min(...posY)
let maxX = Math.max(...posX)
let maxY = Math.max(...posY)

console.log(Math.abs(maxX - minX) * Math.abs(maxY - minY))