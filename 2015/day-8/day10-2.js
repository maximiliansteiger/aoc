const {
    input
} = require('./readData');

let arr = input.split('\r\n')

let first = arr.map((item) => JSON.stringify(item).length).reduce((a, b) => a + b)
let second = arr.map((item) => item.length).reduce((a, b) => a + b)

console.log(first - second)