const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number)

let time = Array.from({length : N + 1 }, () => Infinity)
let node = Array.from({length : N + 1 }, () => [])

time[1] = 0

for (let i = 1; i < input.length; i++) {
  let [A, B, C] = input[i].split(" ").map(Number)
  node[A].push([B, C])
}

let heap = []

heap.push([0, 1])

function popHeap() {
  if (heap.length === 1) return heap.pop()
  let root = heap[0]
  heap[0] = heap.pop()
  let index = 0
  while (true) {
    let left = index * 2 + 1
    let right = index * 2 + 2
    let min = index
    if (left < heap.length && heap[min][0] < heap[left][0]) min = left
    if (right < heap.length && heap[min][0] < heap[right][0]) min = right
    if (min === index) break
    index = min
  }
  return root
}

function pushHeap(item) {
  heap.push(item)
  let index = heap.length - 1
  while (index > 0) {
    let parent = Math.floor((index - 1) / 2)
    if (heap[parent][0] > heap[index][0]) {
      [heap[parent], heap[index]] = [heap[index], heap[parent]];
      index = parent
    } else break
  }
}

while (heap.length !== 0) {
  let [curDist, cur] = popHeap()
  console.log(curDist, cur)
  if (curDist > time[cur]) continue;
  for (let [next, weight] of node[cur]) {
      console.log(time[next] , curDist + weight)
    if (time[next] )
    if (time[next] > curDist + weight) {
      time[next] = curDist + weight
      pushHeap([time[next], next])
    }
  }
}

console.log(time)



