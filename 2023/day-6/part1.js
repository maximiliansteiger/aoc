const { input } = require("./readData");

let arr = input.split("\r\n");

let time = arr[0].trim().split(":")[1].trim().split("   ").map(Number);
let distances = arr[1].trim().split(":")[1].trim().split("  ").map(Number);

let sol = 1;

for (let ind = 0; ind < time.length; ind++) {
  let currCnt = 0;
  for (let index = 0; index < time[ind]; index++) {
    let distance = (time[ind] - index) * index;

    if (distance > distances[ind]) {
      currCnt++;
    }
  }
  sol *= currCnt != 0 ? currCnt : 1;
}
console.log(sol);