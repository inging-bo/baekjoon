const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0]
let ans = []
for (let i = 1; i < input.length; i++) {
  let [curLeg, chicken] = input[i].split(" ").map(Number)
  let cutChicken = chicken * 2 - curLeg
  let fullLegChicken = chicken - cutChicken
  ans.push(`${cutChicken} ${fullLegChicken}`)
}

console.log(ans.join("\n"))
