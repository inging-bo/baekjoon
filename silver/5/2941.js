const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const str = input[0].split("")
let count = 0
for (let i = 0; i < str.length; i++) {

  if (i !== str.length - 1 && str[i] === "c") {
    if (str[i + 1] === "=") {
      count++
      i++
    } else if (str[i + 1] === "-") {
      count++
      i++
    } else {
      count++
    }
  } else if (i !== str.length - 1 && (str[i] === "l" || str[i] === "n")) {
    if (str[i + 1] === "j") {
      count++
      i++
    } else {
      count++
    }
  } else if (i !== str.length - 1 && (str[i] === "s" || str[i] === "z")) {
    if (str[i + 1] === "=") {
      count++
      i++
    } else {
      count++
    }
  } else if (str[i] === "d") {
    if (str[i + 1] === "z" && str[i + 2] === "=") {
      count++
      i += 2
    } else if (str[i + 1] === "-") {
      count++
      i++
    } else {
      count++
    }
  } else {
    count++
  }
}

console.log(count)
