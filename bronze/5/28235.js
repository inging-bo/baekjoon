const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const answer = input[0]
switch(answer) {
  case "SONGDO" :
    return console.log("HIGHSCHOOL")
  case "CODE" :
    return console.log("MASTER")
  case "2023" :
    return console.log("0611")
  case "ALGORITHM" :
    return console.log("CONTEST")
}

