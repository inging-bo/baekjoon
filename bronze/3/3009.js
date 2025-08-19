const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [one1, one2]  = input[0].split(" ").map(Number)
const [two1, two2]  = input[1].split(" ").map(Number)
const [three1, three2]  = input[2].split(" ").map(Number)

let x= [one1, two1, three1]
let y = [one2, two2, three2]

x.sort((a,b) => a - b)
y.sort((a,b) => a - b)

let ans = []
ans.push(x[1] === x[0] ? x[2] : x[0])
ans.push(y[1] === y[0] ? y[2] : y[0])

console.log(ans.join(" "))

