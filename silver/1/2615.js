const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let playBoard = []
for (let i = 0; i < input.length; i++) {
  playBoard.push(input[i].split(" ").map(Number))
}

for (let i = 0; i < 19; i++) {
  for (let j = 0; j < 19; j++) {
    if (playBoard[i][j] === 1) {
      let [x, y] = [i, j]
      let k = 0
      let count = 0
      const left = x - 1
      const right = x + 1
      const leftBottom = x - 1, y - 1
      const bottom = y + 1
      const rightBottom = x + 1, y + 1
      while(k < 5) {

        k++
      }
    }

  }
}

