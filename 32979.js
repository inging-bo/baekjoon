// todo 아파트
//  아파트 게임을 T회 진행하고자 한다.
//  N명의 참가자로 구성되어 있다.
//  1번부터 N번까지 번호가 부여되어 있고,
//  참가자는 각자의 두 손을 층층이 쌓아 올려 손 아파트를 만들어 준비한다.
//  밑에서부터 i번째 위치에 번호가 a_i인 참가자의 손이 자리한다.
//  j번째 아파트 게임의 진행 과정은 다음과 같다.
//  진행자가 한 양의 정수 b_j를 부른다.
//  참가자들이 1부터 b_j까지 수를 센다.
//  수를 셀 때마다 손 아파트의 맨 아래에 있는 손을 빼서 손 아파트의 맨 위에 올린다.
//  참가자들이 진행자가 부른 수 b_j 를 셀 때 맨 아래에 손을 둔 참가자가 패배한다.
//  패배한 참가자는 손을 빼지 않고 그대로 둔다.
//  예를 들어, 손이 6개 있을 때 4를 부르면 아래에서 4번째에 손을 둔 참가자가 패배한다.
//  아파트를 이루는 손의 총 개수보다 큰 수를 부를 수 있음에 유의하자.
//  다음 아파트 게임을 진행할 때 이전 게임이 종료된 상태에서 손 아파트의 위치를 바꾸지 않고 새로운 게임을 시작한다.
//  T번의 게임에서 가장 많이 패배하는 참가자는 벌칙을 받아야 하므로, 각 게임마다 패배하는 참가자를 알아내 보자.
//   입력
//  첫 번째 줄에 참가자의 수 N이 주어진다. (1 <= N <= 40)
//  두 번째 줄에 아파트 게임의 횟수 T가 주어진다. (1 <= T <= 5000)
//  세 번째 줄에 손 아파트에서 손의 위치에 대한 2N개의 수가 공백으로 구분되어 주어진다.
//  a_i는 밑에서 i번째에 손을 둔 참가자의 번호이다. 모든 참가자의 번호는 각각 두 번씩 등장한다. (1 <= a_i <= N)
//  네 번째 줄에 교선이가 부르는 T개의 양의 정수 b_j가 공백으로 구분되어 주어진다.
//  b_j는 j번째 게임에서 교선이가 부른 수를 의미한다. (1 <= b_j <= 1000)
//   출력
//  첫 번째 게임부터 패배하는 참가자의 번호를 순서대로 공백으로 구분하여 출력한다.

// 예제 1 출력 => 4 1
// 4
// 2
// 2 4 4 3 3 1 2 1
// 3 12

const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\r\n");

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [one, two, three, four ] = input
const peoples = parseInt(one)
const numberOfGame = parseInt(two)
const handsArr = three.split(' ').map(Number)
const count = four.split(' ').map(Number)

const lose = []

for (let i = 0; i < numberOfGame; i++) {
  let j = 0
  while (count[i] > j) {
    console.log(count[i] - j === 1, j)
    if (count[i] - j === 1) {
      lose.push(handsArr[0])
    } else {
      let bottomHand = handsArr.shift()
      handsArr.push(bottomHand)
    }
    j++
  }
}

console.log(lose.join(" "));