const { input } = require('./readData');

// let inputJson = JSON.parse(input);

// console.log(JSON.parse(input));


let temp = input.split("\r\n")
    .map(element => element
        .split(" ")
        .map(element => element
            .replace(",", ""))
        .filter(element => !isNaN(+element) && element !== ""))
    .map(Number)
    .reduce((a, b) => a + b);

    
console.log(temp);