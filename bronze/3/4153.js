const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let answer = []
for (let i = 0; i < input.length - 1; i++) {
  let [long, short, short2] = input[i].split(" ").map(Number).sort((a,b) => b - a )
  if (long * long === ((short * short) + (short2 * short2))) {
    answer.push("right")
  } else {
    answer.push("wrong")
  }
}
for (let i = 0; i < answer.length; i++) {
  console.log(answer[i])
}
