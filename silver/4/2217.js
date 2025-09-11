const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0])
let node = Array.from({length : N + 1}, () => 0)
let queue = [0]

function pushHeap(num) {
  queue.push(num)
  let index = queue.length - 1
  while (index > 1) {
    let parent = Math.floor(index / 2)
    if (queue[index] > queue[parent]) break
    [queue[index] , queue[parent]] = [queue[parent] , queue[index]]
    index = parent
  }
}

function popHeap() {
  let root = queue[1]
  let parent = 1
  queue[1] = queue.pop()

  while (1) {
    let left = parent * 2
    let right = parent * 2 + 1
    
    if (queue[parent] > queue[left] || queue[parent] > queue[parent]) {
      if (queue[left] > queue[right]) {
        [queue[right] , queue[parent]] = [queue[parent] , queue[right]]
        parent = right
      } else if (queue[left] < queue[right]) {
        [queue[left] , queue[parent]] = [queue[parent] , queue[left]]
        parent = left
      }
    } else break
  }
  return root
}

for (let i = 1; i <= N; i++) {
  pushHeap(+input[i]) // 10 , 0
}

console.log(queue)
popHeap()
popHeap()
popHeap()
popHeap()
popHeap()
popHeap()
popHeap()
console.log(queue)
