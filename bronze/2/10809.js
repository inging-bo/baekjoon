const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const S = input[0].split("")

const alp = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const arr = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,]
const first = []
for (let i = 0; i < S.length; i++) {
  if (first.includes(S[i])) continue
  first.push(S[i])
  arr[alp.indexOf(S[i])] = i
}

console.log(arr.join(" "))