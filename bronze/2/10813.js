const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number)

let arr = Array.from({length : N}, (_,i) => i + 1)

for (let i = 1; i <= M; i++) {
  let [to, from] = input[i].split(" ").map(Number)
  let temp = arr[to - 1]
  arr[to - 1] = arr[from - 1]
  arr[from - 1] = temp
}

console.log(arr.join(" "))