const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const q = input[0]
const good = ['M','O','B','I','S']
let arr = []
for (let i = 0; i < q.length; i++) {
  if (good.includes(q[i])) {
   arr[good.indexOf(q[i])] = good[good.indexOf(q[i])]
  }
}
if (arr.length === 5) {
  console.log("YES")
} else {
  console.log("NO")
}


console.log(good === arr)
