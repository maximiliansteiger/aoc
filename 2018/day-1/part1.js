const { input } = require('./readData');

let arr = input.split("\r\n").map(Number).reduce((a,b) => a+b);


console.log(arr);