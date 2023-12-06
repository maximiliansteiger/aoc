const { input } = require("./readData");

let arr = input.split("\r\n");
let sum = 0;

let doubled = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];

arr.forEach((item, index) => {
  let winnerCnt = 0;
  let [winners, picked] = item
    .split(":")[1]
    .split("|")
    .map((item) => item.trim().split(new RegExp(/\D+/)).map(Number));

  picked.forEach((item) => {
    if (winners.includes(item)) {
      winnerCnt++;
    }
  });
  sum += winnerCnt > 0 ? doubled[winnerCnt - 1] : 0;
});

console.log(sum);
