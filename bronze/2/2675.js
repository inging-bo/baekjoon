const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0])

for (let i = 1; i <= T; i++) {
  const [num, str] = input[i].split(" ")
  const number = Number(num)
  let arr = [...str]
  for (let i = 0; i < str.length; i++) {
    let j = 1
    while (number > j) {
      arr[i] += str[i]
      j++
    }
  }
  console.log(arr.join(""))
}




