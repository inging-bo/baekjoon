const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const setS = input.slice(1, 1 + N);
const strM = input.slice(1 + N);
console.log(setS)
console.log(strM)
let anw = 0;

const checkStr = (str) => {
  for (let i = 0; i < N; i++) {
    if (setS[i][0] !== str[0] || setS[i][str.length - 1] !== str[str.length - 1])
      continue;
    if (setS[i].slice(0, str.length) === str) return true;
  }
  return false;
};

strM.forEach((str) => {
  if (checkStr(str)) anw += 1;
});

console.log(anw);
