const { input } = require("./readData");

let games = input.split("\r\n");

let sum = 0;

for (let game of games) {
  let rest = game.split(":")[1].split(";");

  let maxRed = 0;
  let maxGreen = 0;
  let maxBlue = 0;

  for (let line of rest) {
    let amount = line.split(",").map((elem) => +elem.split(" ")[1]);
    let color = line.split(",").map((elem) => elem.split(" ")[2]);

    for (let i = 0; i < amount.length; i++) {
      if (color[i] == "red" && amount[i] > maxRed) {
        maxRed = amount[i];
      }
      if (color[i] == "green" && amount[i] > maxGreen) {
        maxGreen = amount[i];
      }
      if (color[i] == "blue" && amount[i] > maxBlue) {
        maxBlue = amount[i];
      }
    }
  }
  sum += maxRed * maxGreen * maxBlue;
}
console.log(sum);
