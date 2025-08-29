const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [a, b] = input[0].split(" ").map(Number);

console.log(g(a, b));
console.log((a * b) / g(a, b));

function g(a, b) {

  while (b !== 0) {
    console.log(`b = ${b}, a % b = ${a} % ${b}`);
    [a, b] = [b, a % b];
  }
  return a;
}

// const [n1, n2] = input[0].split(" ").map(Number)
// let min = Math.min(n1, n2)
// let max = Math.max(n1, n2)
//
// let gcd = []
//
// for (let i = 1; i * i <= min; i++) {
//   if (min % i === 0) {
//     gcd.push(i)
//     if ( i !== min / i ) {
//       gcd.push(min / i)
//     }
//   }
// }
// gcd.sort((a,b) => a - b)
//
// for (let i = 1; i <= gcd.length; i++) {
//   if (max % gcd[gcd.length - i] === 0) {
//     console.log(gcd[gcd.length - i])
//     break
//   }
// }
// let one = max
// let two = min
// while (one !== two) {
//   one > two ? two += min : one += max
// }
// console.log(one)

