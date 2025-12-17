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

// 방향 벡터 (우, 우하, 하, 좌하)
const directions = [
  [0, 1],  // 오른쪽
  [1, 1],  // 우하
  [1, 0],  // 아래
  [1, -1]  // 좌하
];

// 오목을 찾는 함수
function searchFive(y, x, who) {
  for (let [dy, dx] of directions) {
    let count = 1; // 현재 위치를 포함하여 1로 시작
    let [yy, xx] = [y, x];
    
    // 앞쪽 검사
    while (true) {
      yy += dy;
      xx += dx;
      if (yy < 0 || yy >= 19 || xx < 0 || xx >= 19 || playBoard[yy][xx] !== who) break;
      count++;
      if (count === 5) {
        // 오목이 성립하면 그 위치 반환
        answer = [who === 1 ? 'black' : 'white', [yy, xx]];
        return true;
      }
    }
    
    // 뒤쪽 검사
    [yy, xx] = [y, x];
    while (true) {
      yy -= dy;
      xx -= dx;
      if (yy < 0 || yy >= 19 || xx < 0 || xx >= 19 || playBoard[yy][xx] !== who) break;
      count++;
      if (count === 5) {
        // 오목이 성립하면 그 위치 반환
        answer = [who === 1 ? 'black' : 'white', [yy, xx]];
        return true;
      }
    }
  }
  
  return false;
}

// 보드에서 모든 칸을 확인하며 오목을 찾기
for (let i = 0; i < 19; i++) {
  for (let j = 0; j < 19; j++) {
    if (playBoard[i][j] === 1 || playBoard[i][j] === 2) {
      if (searchFive(i, j, playBoard[i][j])) {
        // 오목을 찾으면 바로 출력 후 종료
        console.log(playBoard[i][j] === 1 ? 1 : 2);
        console.log(answer[1].join(" "));
        return;
      }
    }
  }
}

// 오목이 없으면 0 출력
console.log(0);