const { input } = require('./readData');

let arr = input.split("\r\n");

let line = arr[0];
arr.shift();
arr.shift();

let instructions = arr;


//create array from instructions
let arr2 = [];
for (let i = 0; i < instructions.length; i++) {
    let line = instructions[i];
    let arr = line.split("->").reverse();
    arr2.push(arr);
}


for(let i = 0; i < instructions.length; i++) {
    console.log(line)
}
