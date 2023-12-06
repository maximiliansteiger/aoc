const { input } = require("./readData");

let arr = input.split("\r\n");

let copies = new Array(arr.length).fill(1);

arr.forEach((item, index) => {
  let winnerCnt = 0;
  let [winners, picked] = item
    .split(":")[1]
    .split("|")
    .map((item) => item.trim().split(new RegExp(/\D+/)).map(Number));

  picked.forEach((item, ind) => {
    if (winners.includes(item)) {
      winnerCnt++;
    }
  });

  for (let i = 1; i < winnerCnt + 1; i++) {
    copies[index + i] += 1 * copies[index];
  }
});
console.log(copies.reduce((a, b) => a + b));
