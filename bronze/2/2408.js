const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const prec = { "+": 1, "-": 1, "*": 2, "/": 2 };

let output = [];
let stack = [];

for (let i = 1; i < input.length; i++) {

  if (i % 2 !== 0) {
    output.push(BigInt(input[i]));
  } else {

    while (
      stack.length &&
      prec[stack[stack.length - 1]] >= prec[input[i]]
      ) {
      output.push(stack.pop());
    }
    stack.push(input[i]);
  }
}

while (stack.length) output.push(stack.pop());

function divFloor(a, b) {
  let q = a / b;   // 기본 BigInt 나눗셈 (truncate toward 0)
  let r = a % b;   // 나머지
  // 보정: 나머지가 0이 아니고, a와 b 부호가 다르면 floor 내림
  if (r !== 0n && (a < 0n) !== (b < 0n)) {
    q -= 1n;
  }
  return q;
}

let calcStack = [];
for (let token of output) {
  if (typeof token === "bigint") {
    calcStack.push(token);
  } else {
    let b = calcStack.pop();
    let a = calcStack.pop();
    if (token === "+") calcStack.push(a + b);
    else if (token === "-") calcStack.push(a - b);
    else if (token === "*") calcStack.push(a * b);
    else if (token === "/") calcStack.push(divFloor(a, b));
  }
}

console.log(calcStack[0].toString());
