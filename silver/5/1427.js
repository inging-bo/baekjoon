const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let N = input[0]

let number = []
console.log(N)
// pushHeap(N)

function pushHeap(num) {
  if (number.length < 1) return
  let heap = 0
  let head = number[heap++]

  while (heap < number.length - 1) {
    if (head < number[num]) {
      [number[heap], number[head]] = [number[head], number[heap]]
      head = number[heap]
    }
  }

}

console.log(number)





