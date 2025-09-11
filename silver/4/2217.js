const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0])
let node = Array.from({length : N + 1}, () => 0)
let queue = [0]

function heap(num) {
  queue.push(num)
  let index = queue.length - 1
  while (index > 1) {
    let parent = Math.floor(index / 2)
    if (queue[index] > queue[parent]) break
    [queue[index] , queue[parent]] = [queue[parent] , queue[index]]
    index = parent
  }
}

for (let i = 1; i <= N; i++) {
  heap(+input[i]) // 10 , 0
}

console.log(queue)
