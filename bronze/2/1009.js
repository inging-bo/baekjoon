const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input[0]
for (let i = 1; i <= N; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  let j = 1
  let ans = 1
  while (b >= j) {
    ans = ans * a
    ans = +ans.toString().slice(-1)

    j++
  }

  console.log(ans === 0 ? 10 : ans)
}










