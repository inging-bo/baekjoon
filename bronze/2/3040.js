const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let total = 0
let no = []
for (let i = 0; i < input.length; i++) {
  let man = Number(input[i])
  total += man
}

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    let one = Number(input[i])
    let two = Number(input[j])
    if (total - (one + two) === 100) {
      no.push(one)
      no.push(two)
    }
  }
}

for (let i = 0; i < 9; i++) {
  let man = Number(input[i])
  if (!no.includes(man)) {
    console.log(man)
  }
}