const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let ans = []
for (let i = 0; i < 5; i++) {
  let arr = input[i].split("")
  for (let j = 0; j < arr.length; j++) {
    if (ans[j] === undefined) {
      ans[j] = ""
    }
    ans[j] += arr[j]
  }
}
console.log(ans.join(""))

