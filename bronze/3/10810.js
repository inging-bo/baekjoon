const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number)

let arr = Array.from({length : N}, () => 0)

for (let i = 1; i <= M; i++) {
  let [to, from, num] = input[i].split(" ").map(Number)

  for (let j = to - 1; j < from; j++) {
    arr[j] = num
  }
}

console.log(arr.join(" "))