const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const L = BigInt(input[0])
const str = input[1].split("")
let ans = 0n
let pow = 0n
let obj = {
  a : 1n,
  b : 2n,
  c : 3n,
  d : 4n,
  e : 5n,
  f : 6n,
  g : 7n,
  h : 8n,
  i : 9n,
  j : 10n,
  k : 11n,
  l : 12n,
  m : 13n,
  n : 14n,
  o : 15n,
  p : 16n,
  q : 17n,
  r : 18n,
  s : 19n,
  t : 20n,
  u : 21n,
  v : 22n,
  w : 23n,
  x : 24n,
  y : 25n,
  z : 26n
}
for (let i = 0n; i < L; i++) {
  ans += (obj[str[i]]) * 31n**i
}
console.log((ans % 1234567891n).toString())



