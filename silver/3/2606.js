const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const computers = Number(input[0])
const twins = Number(input[1])
let virus = 0
let obj = {
  "0" : input[2].split(" ").map(Number),
}
let idx = 0
for (let i = 0; i < twins - 1; i++) {
  let [one, two] = input[3 + i].split(" ").map(Number)
  console.log(i)
  for (let [key, value] of Object.entries(obj) ) {
    if (value.includes(one)) {
      value.push(two)
    } else if (value.includes(two)) {
      value.push(one)
    } else {
      obj[++idx] = [one, two]
    }
  }
}
console.log(obj)


