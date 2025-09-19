const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = +input[0]
for (let i = 2; i < input.length; i+=2) {
  let count = 0
  for (let j = 0; j < input[i - 1]; j++) {
    let arr= input[i].split(" ").map(Number)
    count += arr[j]
  }
  if (count > 0) {
    console.log("Right")
  } else if (count === 0) {
    console.log('Equilibrium')
  } else {
    console.log('Left')
  }
}



