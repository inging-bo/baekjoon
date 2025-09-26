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
    else if (token === "/") calcStack.push(a / b);
  }
}

console.log(calcStack[0].toString());
