const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]

let heap = []

function pushHeap(num) {
  heap.push(num)
  let index = heap.length - 1
  while (index > 0) {
    let parent = Math.floor((index - 1) / 2)
    if (heap[parent] > heap[index]) {
      [heap[parent] , heap[index]] = [heap[index] , heap[parent]]
      index = parent
    } else break
  }
}

for (let i = 1; i <= N; i++) {
  pushHeap(+input[i])
}

let ans = []

function popHeap() {
  if (heap.length === 1) return heap.pop()
  let root = heap[0]
  heap[0] = heap.pop()
  let index = 0
  while (true) {
    let left = index * 2 + 1
    let right = index * 2 + 2
    let min = index
    if (left < heap.length && heap[left] < heap[min]) min = left
    if (right < heap.length && heap[right] < heap[min]) min = right
    if (min === index) break
    [heap[index] , heap[min]] = [heap[min] , heap[index]]
    index = min
  }
  return root
}

while (heap.length !== 0) {
  ans.push(popHeap())
}
console.log(ans.join("\n"))


