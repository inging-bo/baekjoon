const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number)


let ans = 64
let min = 64
let diffrent = []
let counts = []
for (let i = 1; i <= N - 7; i++) {
  for (let j = 0; j < K - 7; j++) {
    let count = 0
    for (let ii = i; ii < 8 + i; ii++) {
      let slice = input[ii].slice(j, 8 + j).split("")
      let one = ""
      let two = ""
      if (slice[0] === 'B') {
        one = 'B'
        two = 'W'
      } else {
        one = 'W'
        two = 'B'
      }
      let even = slice.filter((item,i) => i % 2 === 0 && item !== one)
      let odd = slice.filter((item,i) => i % 2 !== 0 && item !== two)
      console.log(even, odd)
      count += even.length + odd.length
      // console.log(count)
    }
    counts.push(count)
    console.log('------------------------')
  }
}
// console.log(counts)


