const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [M, K] = input[0].split(" ").map(BigInt)

console.log(M % K === 0n ? "yes" : 'No')