const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [count, difference] = input[0].split(" ").map(Number)
input.shift()
let answer = 0
for (let i = 0; i < count; i++) {
  let j = 1
  let compare = input[i].split("").length
  while (difference >= j) {
    if (input[i + j] !== undefined ) {
      if (input[i + j].split("").length === compare) {
        answer++
      }
      j++
    } else {
      j++
    }
  }
}
console.log(answer)



