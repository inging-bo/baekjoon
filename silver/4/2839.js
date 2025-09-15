const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = +input[0]

let onlyFive = Math.floor(N / 5)
let count = 0
if (onlyFive === N / 5) {
  console.log(onlyFive)
  return
} else {
  while (onlyFive >= 0) {
    let temp = N
    temp = temp - ( 5 * onlyFive )
    count += onlyFive
    if (temp % 3 === 0) {
      count += temp / 3
      console.log(count)
      return
    }
    count = 0
    onlyFive--
  }
  console.log(-1)
}












