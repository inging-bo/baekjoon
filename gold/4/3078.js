const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const names = input.slice(1);

// 이름 길이별 큐를 관리
const queues = Array.from({ length: 21 }, () => []);

let answer = 0;

for (let i = 0; i < N; i++) {
  const nameLen = names[i].length;
  console.log(queues)
  // 현재 등수와 이름 길이가 같은 사람들 중, K보다 큰 차이는 제거 (슬라이딩 윈도우)
  while (queues[nameLen].length > 0 && i - queues[nameLen][0] > K) {
    queues[nameLen].shift();
  }
  
  // 현재 길이와 같은 이름들이 큐에 몇 명 있는가 == 좋은 친구 쌍 수
  answer += queues[nameLen].length;
  
  // 현재 사람을 큐에 넣기
  queues[nameLen].push(i);
}

console.log(answer);



