const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0].split(" ").map(Number)
let answer = ''
let num = Number(N.join(""))
let sort = Number(N.sort((a,b) => a - b).join(""))
let sortReverse = Number(N.sort((a,b) => b - a ).join(""))


if (sort === num) {
  answer += 'ascending'
} else if (sortReverse === num) {
  answer += 'descending'
} else {
  answer += 'mixed'
}
console.log(answer)




