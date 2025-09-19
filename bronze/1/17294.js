const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0]

let split = N.split("").map(Number)
if (split.length < 3) {
  console.log("◝(⑅•ᴗ•⑅)◜..°♡ 뀌요미!!")
  return
}


let diff = split[0] - split[1]
for (let i = 0; i < split.length - 1; i++) {
  if (diff !== split[i] - split[i + 1]) {
    console.log("흥칫뿡!! <(￣ ﹌ ￣)>")
    return
  }
}
console.log('◝(⑅•ᴗ•⑅)◜..°♡ 뀌요미!!')

