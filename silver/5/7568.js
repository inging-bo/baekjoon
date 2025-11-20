const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]

let temp = []
let ranks = {}
let rank = 1
for (let i = 1; i <= N; i++) {
  temp.push(input[i].split(" ").map(Number))
  ranks[temp[i - 1]] = 1
}

let sort = temp.sort(([a, c], [b, d]) => b - a)

for (let i = 0; i < sort.length; i++) {
  if (i !== sort.length - 1) {
    let [curKg, curCm] = sort[i]
    let [nextKg, nextCm] = sort[i + 1]

    if (curKg > nextKg && curCm > nextCm) {
      ranks[[curKg, curCm]] = rank++
    } else if (curKg >= nextKg || curCm >= nextCm) {
      ranks[[curKg, curCm]] = rank
    } else {
      ranks[[curKg, curCm]] = i + 1
    }
  } else {
    let [prevKg, prevCm] = sort[i - 1]
    let [curKg, curCm] = sort[i]
    if (prevKg > curKg && prevCm > curCm) {
      ranks[[curKg, curCm]] = i + 1
    } else if (prevKg >= curKg || prevCm >= curCm) {
      ranks[[curKg, curCm]] = rank
    } else {
      ranks[[curKg, curCm]] = i + 1
    }
  }
}
let answer = []
for (let [key, value] of Object.entries(ranks)) {
  answer.push(value)
}
console.log(answer.join(" "))


