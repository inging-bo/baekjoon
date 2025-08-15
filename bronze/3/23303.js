const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const str = input[0]

const d2 = str.filter((item) => item === "D2" || item === "d2" )

if (str.includes('d2') || str.includes('D2')) {
  console.log('D2')
} else {
  console.log("unrated")
}