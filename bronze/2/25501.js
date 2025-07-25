const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0])
let count = 0
const check = (test, zero, lng) => {
  count++
  if (zero >= lng ) {
    console.log(1, count)
    count = 0
  } else if (test[zero] !== test[lng]) {
    console.log(0, count)
    count = 0
  } else {
    check(test, zero + 1, lng - 1)
  }
}

const isPalindrome = (str) => {
  return check(str, 0, str.length - 1)
}

for (let i = 1; i <= T; i++) {
  isPalindrome(input[i])
}

