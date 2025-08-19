const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const M = +input[0]
const N = +input[1]

// 기본 소수 찾기

// let min = []
// for (let i = M; i <= N; i++) {
//   let j = 2
//   while (i >= j) {
//     if (i % j === 0) {
//       break
//     }
//     j++
//   }
//   if (i === j) {
//     min.push(i)
//   }
// }
// if (min.length === 0) {
//   console.log(-1)
// } else {
//   console.log(min.reduce((a,b) => a + b))
//   console.log(min[0])
// }

// 효율적인 소수 찾기(루트 값을 사용)

// function isPrime(num) {
//   if (num < 2) return false;
//   for (let i = 2; i * i <= num; i++) {
//     if (num % i === 0) return false
//   }
//   return true
// }
//
// let arr = []
// let sum = 0
// for (let i = M; i <= N; i++) {
//   if (isPrime(i)) {
//     arr.push(i)
//     sum += i
//   }
// }
//
// if (arr.length === 0) {
//   console.log(-1)
// } else {
//   console.log(sum)
//   console.log(arr[0])
// }

// 에라토스테네스의 체

function sieve(N) {
  let isPrime = Array(N + 1).fill(true);
  isPrime[0] = isPrime[1] = false; // 0과 1은 소수 아님

  for (let i = 2; i * i <= N; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= N; j += i) {
        isPrime[j] = false; // 배수 지우기
      }
    }
  }
  return isPrime;
}

let isPrime = sieve(N);
let arr = [];
let sum = 0;

for (let i = M; i <= N; i++) {
  if (isPrime[i]) {
    arr.push(i);
    sum += i;
  }
}
console.log(arr)
if (arr.length === 0) {
  console.log(-1);
} else {
  console.log(sum);
  console.log(arr[0]);
}



