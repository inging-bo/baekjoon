const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 알파뱃 갯수만큼 배열 만들고
//현재 알파뱃에 배열에 추가 한다
let alp = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const N = input[0].split("").map((i) => i.toUpperCase())

let arr = Array.from({length : alp.length} , () => 0)

for (let i = 0; i < N.length; i++ ) {
  arr[alp.indexOf(N[i])]++
}
let max = 0
let idx = 0
for (let i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i]
    idx = i
  }
}
let dup = arr.filter(item => item === max).length > 1
if (dup) {
  console.log('?')
} else {
  console.log(alp[idx])
}


