const { input } = require('./readData');

let arr = input.split('\r\n');
let start = arr.splice(0, 9);
let instructions = arr;
instructions.shift();

let crateArray = [];
for (let i = 0; i < 9; i++) {
    let crate = "";
    start.forEach(element => {
        let split = element.match(/.{1,4}/g);
        crate += split[i].replace(/[^a-zA-Z]/g, "");
    });
    crateArray.push(crate);
}

instructions.forEach(element => {
    let split = element.split(" ");
    move(+split[1], +split[3], +split[5]);
});

function move(amount, from, to) {
    let affectedCrates = crateArray[from - 1].slice(0, amount);
    crateArray[from - 1] = crateArray[from - 1].slice(amount, crateArray[from - 1].length);
    let temp = crateArray[to - 1];
    crateArray[to - 1] = affectedCrates + temp;
}
let result = "";
crateArray.forEach(element => {
    result += element[0]
});

console.log(result);