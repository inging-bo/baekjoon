const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number)

let arr = []
let arrive = N
let queue = [N]
while (arrive !== 10) {
  arrive = queue.shift()
  if (arrive - 1 > 0) {
    queue.push(arrive - 1)
  }
  queue.push(arrive + 1)
  queue.push(arrive * 2)
  for (let i = 0; i < queue.length; i++) {
    queue[i]
  }
}
console.log(queue)

