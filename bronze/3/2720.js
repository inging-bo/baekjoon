const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0])

for (let i = 1; i <= N; i++) {
  let Num = +input[i]
  let quarter = 0
  let dime = 0
  let nickel = 0
  let penny = 0
  let ans = []
  quarter = Math.floor(Num / 25) // 4
  Num -= quarter * 25 // 24
  dime = Math.floor(Num / 10) // 2
  Num -= dime * 10 // 20
  nickel = Math.floor(Num / 5) //
  Num -= nickel * 5
  penny = Num
  ans.push(quarter, dime, nickel, penny)
  console.log(ans.join(" "))
}
