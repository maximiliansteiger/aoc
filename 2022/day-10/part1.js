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
