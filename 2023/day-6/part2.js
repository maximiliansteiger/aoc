const { input } = require("./readData");

let arr = input.split("\r\n");

let time = arr[0].split(":")[1].replaceAll(" ", "");
let distances = arr[1].split(":")[1].replaceAll(" ", "");

let cnt = 0;

for (let index = 0; index < time; index++) {
  let distance = (time - index) * index;

  if (distance > distances) {
    cnt++;
  }
}
console.log(cnt);
