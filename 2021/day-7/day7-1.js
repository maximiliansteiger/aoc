const { input } = require('./readData');
let arr = input.split(',').map(Number);
let fuelArray = [];
let fuel = 0;


for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        fuel += Math.abs(arr[j] - i);
    }
    fuelArray.push(fuel);
    fuel = 0;
}
console.log(Math.min(...fuelArray));


