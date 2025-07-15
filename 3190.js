// 첫째 줄 보드의 크기
// 다음 줄 사과의 갯수
// 다음 줄 사과의 위치 [행, 열]  -> 1행 1열은 사과가 없음
// 다음 줄 뱀의 방향 변환 횟수
// 다음 줄 뱀의 방향 변환 정보 [초,  L or D]

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = []
const board = Array.from({length : Number(input[0])}, () => 0)
const boards = board.map(_ => [...board])
input.shift()
const appleCount = Number(input.shift())
const applePosition = input.splice(0, appleCount)
const snakeCount = Number(input.shift())
const snakePosition = input.splice(0, snakeCount)

for (let i = 0; i < appleCount; i++) {
  const [x,none, y] = applePosition[i]
  boards[x][y] = 1
}

console.log(boards)