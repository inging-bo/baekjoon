const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0]

switch (N) {
  case "NLCS" : {
    console.log('North London Collegiate School')
  } break
  case "BHA" : {
    console.log('Branksome Hall Asia')
  } break
  case "KIS" : {
    console.log('Korea International School')
  } break
  case "SJA" : {
    console.log('St. Johnsbury Academy')
  } break
}
