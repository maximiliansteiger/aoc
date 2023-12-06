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