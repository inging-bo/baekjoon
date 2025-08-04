const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = BigInt(input[0])
let nums = []
for (let i = 1n; i <= N; i++) {
  let [num, pow] = input[i].split(" ").map(BigInt)
  
  let mod = BigInt(10);
  
  let result = 1n;
  while (pow > 0n) {
    if (pow % 2n === 1n) {
      result = (result * num) % mod;
    }
    num = (num * num) % mod;
    pow = pow / 2n;
  }
  nums.push(result)
}
for (let i = 0n; i < nums.length; i++) {
  if (nums[i] % 10n === 10n) {
    console.log(10)
  } else {
    let answer = nums[i] % 10n
    console.log(answer.toString())
  }
}









