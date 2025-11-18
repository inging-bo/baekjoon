const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [P, K] = input[0].split(" ")

const BigP = BigInt(P)
const NumK = Number(P)

let isPrime = Array.from({length : +K + 1}, () => true)

isPrime[0] = isPrime[1] = false

for (let i = 2; i * i < NumK; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j < NumK; j += i) {
      isPrime[j] = false
    }
  }
}
for (let i = 2; i < NumK; i++) {
  if (isPrime[i] && BigP % BigInt(i) === 0n) {
    console.log("BAD", i)
    return
  }
}

console.log("GOOD")

