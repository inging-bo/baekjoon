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
    if (i < 0 || j < 0 || i >= 19 || j >= 19) continue
      let left = playBoard[i - 1][j]
      let top = playBoard[i][j - 1]
      let right = playBoard[i - 1][j]
      let bottom = playBoard[i][j + 1]
      if (left)
      if (right)
      if (right)
      if (right)
  }
}

function letf(x,y) {

}


  start(x -1 , y)
  start(x, y + 1)
  start(x - 1, y)
  start(x, y - 1)
