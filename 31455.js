const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let count = Number(input[0])
let quest = 1
let answer = 0
const slice = (repeat, quest) => {
  
  let total = 0
  for (let i = 1; i <= repeat; i++) {
    total += input[quest + i].split("").reduce((acc, cur) => acc + Number(cur), 0)
    console.log(total)
  }
  let pos = total % 4
  
  switch (pos) {
    case 0 : answer += total - input[quest + 1][0]
      break;
    case 1 : answer += total - input[quest + 1][1]
      break;
    case 2 : answer += total - input[quest + 2][0]
      break;
    case 3 : answer += total - input[quest + 2][1]
      break;
  }

}

let i = 0
while (count > i) {
  let repeat = Number(input[quest])
  
  let total = 0
  let arr = []
  for (let i = 1; i <= repeat; i++) {
    total += input[quest + i].split("").reduce((acc, cur) => acc + Number(cur), 0)
  }
  if (repeat / 2 !== 1) {
  
  }
  let pos = total % 4
  
  switch (pos) {
    case 0 : slice(repeat / 2)
      break
    case 1 : slice(repeat / 2)
      break
    case 2 : slice(repeat / 2)
      break
    case 3 : slice(repeat / 2)
      break
  }
  
  quest += repeat + 1
  i++
}

console.log(answer)

