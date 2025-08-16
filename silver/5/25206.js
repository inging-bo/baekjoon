const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let count = [0,0]

for (let i = 0; i < input.length; i++) {
  let [name, score, rank] = input[i].split(" ")
  switch (rank) {
    case "A+" :
      rank = 4.5; break;
    case "A0" :
      rank = 4; break;
    case "B+" :
      rank = 3.5; break;
    case "B0" :
      rank = 3; break;
    case "C+" :
      rank = 2.5; break;
    case "C0" :
      rank = 2; break;
    case "D+" :
      rank = 1.5; break;
    case "D0" :
      rank = 1; break;
    case "F" :
      rank = 0; break;
  }
  if (rank !== "P") {
    const number = Number(score)
    count[0] += number * rank
    count[1] += number
  }
}
console.log(count[0] / count[1])