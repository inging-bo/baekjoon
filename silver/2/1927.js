const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];

let queue = []

for (let i = 1; i <= N; i++) {
  if (queue.length === 0 && !+input[i]) {
    console.log('0')
  } else if (!+input[i]) {

  } else {
    let j = +input[i]
    while (j) {
      queue
    }
  }
}

