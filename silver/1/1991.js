const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0])
let tree = {}

let preorder = []
let inorder = []
let postorder = []

for (let i = 1; i <= N; i++) {
  let [parent, left, right] = input[i].split(" ")
  tree[parent] = [left, right]
}

function traversal(node) {
  if (node === ".") return
  
  const [left, right] = tree[node]
  preorder.push(node)
  traversal(left)
  inorder.push(node)
  traversal(right)
  postorder.push(node)
}

traversal("A")
console.log(preorder.join(""))
console.log(inorder.join(""))
console.log(postorder.join(""))
