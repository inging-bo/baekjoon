const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let T = Number(input[0]);
let idx = 1;

function solve(arr) {
  let remain = { value: 0 };
  
  const divide = (r, c, size) => {
    if (size === 1) return;
    
    let total = 0;
    for (let i = r; i < r + size; i++) {
      for (let j = c; j < c + size; j++) {
        total += arr[i][j];
      }
    }
    
    let eatenIdx = total % 4;
    
    const half = size / 2;
    const areas = [
      [r, c],               // 0번: 왼쪽 위
      [r, c + half],        // 1번: 오른쪽 위
      [r + half, c],        // 2번: 왼쪽 아래
      [r + half, c + half]  // 3번: 오른쪽 아래
    ];
    console.log(areas)
    for (let i = 0; i < 4; i++) {
      const [nr, nc] = areas[i];
      if (i === eatenIdx) continue;
      
      if (half === 1) {
        remain.value += arr[nr][nc];
      } else {
        divide(nr, nc, half);
      }
    }
  };
  
  divide(0, 0, arr.length);
  return remain.value;
}

for (let t = 0; t < T; t++) {
  let N = Number(input[idx++]);
  let arr = [];
  for (let i = 0; i < N; i++) {
    arr.push(input[idx++].split("").map(Number));
  }
  console.log(solve(arr));
}







