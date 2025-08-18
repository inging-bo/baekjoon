const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let [A, B] = input[i].split(" ").map(Number)
  if (A % B === 0) {
    console.log("multiple")
  } else if (B % A === 0) {
    console.log('factor')
  } else {
    console.log('neither')
  }
}
