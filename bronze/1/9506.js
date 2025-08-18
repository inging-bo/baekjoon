const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let half = Math.floor(+input[i] / 2)
  let j = 1
  let min = []
  while (half >= j) {
    if (+input[i] % j === 0) {
      min.push(j)
    }
    j++
  }
  let total = min.reduce((a,b) => a + b)
  if (total === +input[i]) {
    let ans = `${input[i]} =`
    for (let i = 0; i < min.length; i++) {
      if (i === min.length - 1) {
        ans += ` ${min[i]}`
      } else {
        ans += ` ${min[i]} +`
      }
    }
    console.log(ans)
  } else {
    console.log(`${input[i]} is NOT perfect.`)
  }
}


