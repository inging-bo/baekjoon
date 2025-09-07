const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];

let queue = []
let ans = []
function heapPush() {
  let index = queue.length - 1;
  while (index > 0) {
    let parentIndex = Math.floor((index - 1) / 2); // 수정
    if (queue[parentIndex] > queue[index]) {
      [queue[parentIndex], queue[index]] = [queue[index], queue[parentIndex]];
      index = parentIndex;
    } else {
      break;
    }
  }
}
function heapPop() {
  if (queue.length === 0) {
    ans.push(0)
    return;
  }
  
  const root = queue[0]
  const last = queue.pop()
  
  if (queue.length > 0) {
    queue[0] = last;
    let index = 0;
    
    while (true) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;
      let smaller = index;
      
      if (left < queue.length && queue[left] < queue[smaller]) {
        smaller = left;
      }
      if (right < queue.length && queue[right] < queue[smaller]) {
        smaller = right;
      }
      
      if (smaller !== index) {
        [queue[index], queue[smaller]] = [queue[smaller], queue[index]]
        index = smaller
      } else {
        break
      }
    }
  }
  ans.push(root)
}
for (let i = 1; i <= N; i++) {
  if (+input[i]) {
    queue.push(+input[i])
    heapPush()
  } else {
    heapPop()
  }
}
console.log(ans.join("\n"))