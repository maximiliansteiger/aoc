<<<<<<< HEAD
const { input } = require("./readData");

let instructions = input.split("\r\n");

let storage = [];
let cycle = 0;
let value = 1;
let index = 0;

storage.push("addx 0");

while (cycle < 230) {
  let instruction = instructions[index];
  console.log(storage.length)
  if (storage.length >= 2 ) {
    let val = storage.pop()
    value += +val.split(" ")[1]
  }

  if (instruction != "noop") {
    storage.push(instruction);
  }
 

  if (index >= instructions.length-1) {
    index = 0;
  }

  if (
    cycle == 20 ||
    cycle == 60 ||
    cycle == 100 ||
    cycle == 140 ||
    cycle == 180 ||
    cycle == 220
  ) {
    console.log(cycle,value);
  }
  cycle++;
  index++;
}

console.log(value);
=======
const { input } = require('./readData');

let instructions = input.split('\r\n');

let cycle = 0;
let sum = 1;
let lastValue = 0;

console.log(instructions);

for (let i = 0; i < instructions.length; i++) {
    cycle++;
    console.log("Cycle: " + cycle);
    sum += lastValue;

    if (instructions[i].split(' ')[0] === 'addx') {
        lastValue = parseInt(instructions[i].split(' ')[1]);
    } else {
        // lastValue = 0;
        //do nothing
    }
    console.log(sum);

    if (cycle == 20) {
        console.log(sum * cycle);
        break;
    }

    console.log(instructions[i]);
    console.log("\n");
}
>>>>>>> fffc6e903a434d8129c2fa8c720184845891e7ac
