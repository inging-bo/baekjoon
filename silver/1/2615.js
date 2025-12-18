const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");


let playBoard = [];
let answer = [];

// 보드 초기화
for (let i = 0; i < input.length; i++) {
  playBoard.push(input[i].split(" ").map(Number));
}

const direction = [
  [0,1], // 오른쪽
  [1,1], // 오른쪽 아래
  [1,0], // 아래
  [1,-1], // 왼족 아래
]

for (let i = 0; i < 19; i++) {
  for (let j = 0; j < 19; j++) {
    if (playBoard[i][j] === 1 || playBoard[i][j] === 2) {
      if (search(i,j, playBoard[i][j])) {
        console.log(i, j)
        console.log(playBoard[i][j])
      }
    }
  }
}

function search(y, x, color) {
  for (let [yy, xx] of direction) {
    let pos = playBoard[y + yy][x + xx]

    let [dy, dx] = [y, x]
    if (color === pos) {
      let i = 0
      let count = 1
      // while (i < 5) {
      //   dy += yy
      //   dy += xx
      //   if (color === playBoard[dy][dx]) count++
      //   i++
      // }
      // if (count === 5) return true
      return true
    }
  }
}