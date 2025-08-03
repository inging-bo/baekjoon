const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0])

let answer = []
let arr = Array.from({length: (N * 2) - 1}, () => " ")

let num = arr.length >> 1
for (let i = 0 ; i < arr.length / 2; i++) {

  arr.splice(num - i,1, "*")
  arr.splice(num + i,1, "*")
  answer.push(arr.slice(0, num + i + 1))
}
for (let i = 0 ; i < arr.length / 2 - 1; i++) {

  arr.splice(i,1, " ")
  arr.splice(arr.length - 1 - i,1, " ")
  answer.push(arr.slice(0, arr.length - 1 - i))
}
for (let i = 0; i < answer.length; i++) {
  console.log(answer[i].join(""))
}
