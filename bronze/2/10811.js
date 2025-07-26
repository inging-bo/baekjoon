const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number)
let bucket = Array.from({length : N}, (_,i) => i + 1)

const reverse = (to, from) => {
  let arr = bucket.slice(to, from)
  let reverseNum = []
  for (let i = 1; i <= arr.length; i++) {
    reverseNum.push(arr[arr.length - i])
  }
  return reverseNum
}

for (let i = 1; i <= K; i++) {
  let [to, from] = input[i].split(" ").map(Number)
  bucket.splice(to - 1, from - to + 1, ...reverse(to - 1, from))
}
console.log(bucket.join(" "))

