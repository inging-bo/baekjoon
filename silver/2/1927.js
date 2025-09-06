const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];

let queue = [0]

function heap() {
  for (let i = 1; i <= queue.length; i++) {
    let temp
    let left = queue[i * 2]
    let right = queue[(i * 2) + 1]
    console.log(left, right)
    if (queue[i] > left) {
      temp = left // 1
      left = queue[i] // 12345678
      queue[i] = temp
      i *= 2
      console.log(queue)
    } else if (queue[i] > right) {
      temp = right
      right = queue[i]
      queue[i] = temp
      i = (i * 2) + 1
    }
  }
  
}

for (let i = 1; i <= N; i++) {
  if (queue.length === 1 && !+input[i]) {
    console.log(queue[0],'hhh')
  } else if (!+input[i]) {
    console.log(queue)
  } else {
    queue.push(+input[i])
    heap()
  }
}
