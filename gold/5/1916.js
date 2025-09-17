const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];
const M = +input[1];
const [start, arrive] = input[M + 2].split(" ").map(Number)

let node = Array.from({length : N + 1}, () => [])

for (let i = 2; i < input.length - 1; i++) {
  let [u, v, w] = input[i].split(" ").map(Number)
  node[u].push([v, w])
}
let dist = Array(N + 1).fill(Infinity)
dist[start] = 0
let heap = []
heap.push([0, start])
function pushHeap(item) {
  heap.push(item)
  let index = heap.length - 1
  while (index > 0) {
    let parent = Math.floor((index - 1) / 2)
    if (heap[parent][0] > heap[index][0]) {
      [heap[parent], heap[index]] = [heap[index], heap[parent]]
    } else break
    index = parent
  }
}

function pushPop() {
  if (heap.length === 1) return heap.pop()
  let root = heap[0]
  heap[0] = heap.pop()
  let index = 0
  while (true) {
    let left = (2 * index) + 1;
    let right = (2 * index) + 2;
    let min = index;
    if (left < heap.length && heap[left][0] < heap[min][0]) min = left;
    if (right < heap.length && heap[right][0] < heap[min][0]) min = right;
    if (min === index) break;
    [heap[min] , heap[index]] = [heap[index] , heap[min]];
    index = min
  }
  
  return root
}
while (heap.length !== 0) {
  let [curDist, cur] = pushPop()
  if (curDist > dist[cur]) continue
  for (let [next, weight] of node[cur]) {
    if (dist[next] > curDist + weight) {
      dist[next] = curDist + weight
      pushHeap([dist[next], next])
    }
  }
}
console.log(dist[arrive])



