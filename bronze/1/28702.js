const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  if (+input[i]) {
    let nextNum = +input[i] + (3 - i)
    if (nextNum % 15 === 0) {
      console.log("FizzBuzz");
    } else if (nextNum % 3 === 0 && nextNum % 5 !== 0) {
      console.log("Fizz");
    } else if (nextNum % 3 !== 0 && nextNum % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(nextNum)
    }
    return
  }
}

