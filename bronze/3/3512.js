const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, c] = input[0].split(" ").map(Number)
let arr = [0,0,0]
let bal = 0
for (let i = 1; i < input.length; i++) {
  let [area, room] = input[i].split(" ").map((item, i) => i === 0 ? Number(item) : item)
  if (room === 'balcony') {
    arr[0] += area
    bal += c * area / 2
  } else {
    arr[0] += area
  }
  if (room === 'bedroom') arr[1] += area
}
arr[2] = (arr[0] * c) - bal
console.log(arr.join("\n"))
