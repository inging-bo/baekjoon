const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let half = input[i].length >> 1
  let left = input[i].slice(0, half)
  let right = input[i].slice(input[i].length - half)
  let pass = true

  left = left.split("").map(Number)
  right = right.split("").map(Number)

  for (let j = 0; j < left.length; j++) {
    if (left[j] !== right[right.length - 1 - j]) {
      pass = false
      break
    }
  }
  if (pass) {
    console.log('yes')
  } else {
    console.log("no")
  }
}

