const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number)

let test = []
let ans = []
function back(num, depth) {
  if (depth === 0) {
    test.push(num)
    console.log(test)
    return
  }
  test.push(num)
  for (let i = 1; i <= N; i++) {
    if (!test.includes(i)) {
      back(i, depth - 1)
      test.pop()
    }
  }
  test = []
}
for (let i = 1; i <= N; i++) {
  back(i, M)
}

console.log(ans)




