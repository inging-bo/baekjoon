// 첫째 줄 보드의 크기
// 다음 줄 사과의 갯수
// 다음 줄 사과의 위치 [행, 열]  -> 1행 1열은 사과가 없음
// 다음 줄 뱀의 방향 변환 횟수
// 다음 줄 뱀의 방향 변환 정보 [초,  L or D]

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const board = Array.from({length : Number(input[0])}, () => 0)
const boards = board.map(_ => [...board])
const boardCount = Number(input.shift())
const appleCount = Number(input.shift())
const applePosition = input.splice(0, appleCount)
const snakeCount = Number(input.shift())
const snakePosition = input.splice(0, snakeCount)

for (let i = 0; i < appleCount; i++) {
  const [x, y] = applePosition[i].split(" ")
  boards[x - 1][y - 1] = 1
}

const turnIdx = {}

for (let i = 0; i < snakeCount; i++) {
  const [second, dir] = snakePosition[i].split(" ")
  turnIdx[second] = dir
}

// 방향: 오→하→좌→상 (시계방향)
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let dir = 0; // 시작 방향: 오른쪽

let time = 0;

let snake = [[0, 0]]; // 뱀 좌표 배열 (머리부터 꼬리까지)
let head = [0, 0]; // 뱀 머리 위치

while (true) {
  time++
  
  const nx = head[0] + dx[dir]
  const ny = head[1] + dy[dir]
  
  // 벽 or 자기 몸에 부딪히면 게임 종료
  if (
    nx < 0 || nx >= boardCount || ny < 0 || ny >= boardCount ||
    snake.some(([x, y]) => x === nx && y === ny)
  ) {
    break;
  }
  
  // 이동
  head = [nx, ny];
  snake.unshift(head); // 머리 추가
  
  if (boards[nx][ny] === 1) {
    boards[nx][ny] = 0; // 사과 제거
  } else {
    snake.pop(); // 사과 없으면 꼬리 제거
  }
  
  if (turnIdx[time] && turnIdx[time] === "D") {
    dir = (dir + 1) % 4;
    const firstKey = Object.keys(turnIdx)[0];
    delete turnIdx[firstKey];
  } else if (turnIdx[time] && turnIdx[time] === "L") {
    dir = (dir + 3) % 4;
    const firstKey = Object.keys(turnIdx)[0];
    delete turnIdx[firstKey];
  }
}

console.log(time)

