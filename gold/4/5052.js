const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const t = +input[0];
let j = 0
let i = 1
let num = 0
while (t > j) {
  num = +input[i]
  
  let nodes = {}
  let arr = []
  function insert(num) {
    let node = nodes
    for (const ch of num) {
      
      if (!node[ch]) node[ch] = {}
      if (node.isEnd) {
        console.log("NO")
        return false
      }
      node = node[ch]
    }
    node.isEnd = true
    return true
  }
  for (let j = 0; j < num; j++) {
    arr.push(input[++i])
  }
  arr.sort((a,b) => a.length - b.length)
  
  for (let j = 0; j < num; j++) {
    if (!insert(arr[j])) {
      break
    }
    if (j === num - 1) {
      console.log("YES")
    }
  }
  nodes = {}
  arr = []
  i += 1
  j++
}




