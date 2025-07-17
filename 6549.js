const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let idx = 0;

while (idx < input.length) {
  const line = input[idx++].trim().split(" ").map(Number);
  const n = line[0];
  
  if (n === 0) break;
  
  const heights = line.slice(1);
  const stack = [];
  let maxArea = 0;
  
  for (let i = 0; i <= n; i++) {
    const currentHeight = i === n ? 0 : heights[i];
    
    while (stack.length && heights[stack[stack.length - 1]] >= currentHeight) {
      const topIndex = stack.pop();
      const height = heights[topIndex];
      
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      const area = height * width;
      
      maxArea = Math.max(maxArea, area);
    }
    
    stack.push(i);
  }
  
  console.log(maxArea);
}
