const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]
let queue = []
function pushHeap(cur) {
  queue.push(cur)
  let index = queue.length - 1
  let parentIndex = Math.floor((index - 1) / 2)
  while (index > 0) {
    if (queue[parentIndex] > queue[index]) {
      [queue[parentIndex] , queue[index]] = [[queue[index] , queue[parentIndex]]]
    }
    index = parentIndex
  }
}
for (let i = 1; i <= input.length; i++) {
  pushHeap(+input[i])
}
console.log(queue)
