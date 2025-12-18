const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 상근이 카드 갯수
const N = BigInt(input[0])

// 상근이 카드 배열
const one = input[1].split(" ").map(BigInt)

// 전체 카드 갯수
const M = BigInt(input[2])
let obj = {}

// 전체 카드 배열
const two = input[3].split(" ").map(BigInt)
// 오브젝트에 상근이의 카드를 넣는다
for (let i = 0n; i < N; i++) {
  obj[one[i]] = true
}

// 정답을 위한 빈 배열

const answer = []
for (let i = 0n; i < M; i++) {
  answer.push(0n)
}

// 전체 카드를 돌면서 상근이 카드가 있는지 확인
for (let i = 0n; i < M; i++) {
    if (obj[two[i]]) answer[i] = 1n
}
console.log(obj)
console.log(answer.join(" "))





