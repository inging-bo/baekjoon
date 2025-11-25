const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]

let temps = []
let ranks = Array.from({length : N}, () => 1)

for (let i = 1; i <= N; i++) {
  temps.push(input[i].split(" ").map(Number))
}

for (let i = 0; i < N; i++) {
  valueChk(i)
}

function valueChk(num) {
  for (let i = 0; i < N; i++) {
    if (i !== num) {
      let [chkKg, chkCm] = temps[num]
      let [curKg, curCm] = temps[i]

      if (chkKg > curKg && chkCm > curCm) {
        ranks[i]++
      }
    }
  }
}

console.log(ranks.join(" "))
// for (let i = 1; i <= N; i++) {
//   temp.push(input[i].split(" ").map(Number))
// }
//
// let sort = temp.sort(([a, c], [b, d]) => b - a)
//
//
// for (let i = 0; i < sort.length; i++) {
//   if (i !== sort.length - 1) {
//     let [curKg, curCm] = sort[i]
//     let [nextKg, nextCm] = sort[i + 1]
//     if (curKg > nextKg && curCm > nextCm) {
//       ranks[[curKg, curCm]] = rank++
//     } else if (curKg >= nextKg || curCm >= nextCm) {
//       ranks[[curKg, curCm]] = rank
//     } else {
//       ranks[[curKg, curCm]] = i + 1
//     }
//   } else {
//
//     let [prevKg, prevCm] = sort[i - 1]
//     let [curKg, curCm] = sort[i]
//     if (prevKg > curKg && prevCm > curCm) {
//       ranks[[curKg, curCm]] = i + 1
//     } else if (prevKg >= curKg || prevCm >= curCm) {
//       ranks[[curKg, curCm]] = rank
//     } else {
//       ranks[[curKg, curCm]] = i + 1
//     }
//   }
// }
// let answer = []
// for (let [key, value] of Object.entries(ranks)) {
//   answer.push(value)
// }
// console.log(answer.join(" "))


