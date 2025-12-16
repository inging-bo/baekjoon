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
    if (i >= 19 || j >= 19) continue
    if (playBoard[i][j] === 1) {
      search(i,j,1)
    } else if (playBoard[i][j] === 2) {
      search(i,j,2)
    }
  }
}

function search(x,y, color) {
  
  if (x - 1 < 0 || y - 1 < 0 || x + 1 >= 19 || y + 1 >= 19 ) return
  
  let leftTop = playBoard[x - 1][y - 1]
  let top = playBoard[x][y - 1]
  let rightTop = playBoard[x + 1][y - 1]
  let right = playBoard[x - 1][y]
  let rightBottom = playBoard[x + 1][y + 1]
  let bottom = playBoard[x][y + 1]
  let leftBottom = playBoard[x - 1][y + 1]
  let left = playBoard[x - 1][y]
  const position = [leftTop, top, rightTop, right, rightBottom, bottom, leftBottom, left]
  for (let i = 0; i < 8; i++) {
    if (position[i] === color) {
      console.log(position[i])
    }
  }
  
  
  let count = 0
  let i = 0
  while (i !== 0) {
  
  }
}
