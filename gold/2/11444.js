const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");


let N = BigInt(input[0]);
let mod = BigInt(1000000007);

if (N === 0n) {
  console.log(0);
} else if (N === 1n) {
  console.log(1);
} else {
  let a = 0n;
  let b = 1n;
  for (let i = 2n; i <= N; i++) {
    let temp = (a + b) % mod;
    a = b;
    b = temp;
  }
  console.log(b.toString());
}

