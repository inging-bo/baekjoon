const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]

let count = 0
let num = 666
while (count < N) {
  let str = num.toString()
  for (let i = 0; i <= str.length - 3; i++) {
    let six = str.slice(i, i + 3)
    if (six === "666" && count === N - 1) {
      console.log(num)
      return
    } else if (six === "666") {
      count++
      break
    }
  }
  num++
}
