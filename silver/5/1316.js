const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0])
let count = 0
for (let i = 1; i < input.length; i++) {
    let use = []
    for (let j = 0 ; j < input[i].length; j++) {
      let thisArr = input[i]
      if (!use.includes(thisArr[j]) || thisArr[j] === thisArr[j - 1]) {
        use.push(thisArr[j])
      }
    }
    if (input[i] === use.join("")) {
      count++
    }
}
console.log(count)

