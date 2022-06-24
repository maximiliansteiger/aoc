const { input } = require('./readData');
let arr = input.split(',').map(Number);
let fuelArray = [];
let fuel = 0;
let steps = 1;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        steps = Math.abs(arr[j] - i);
        for (let k = 0; k <= steps; k++) {
            fuel += k;
        }
    }
    steps = 1;
    fuelArray.push(fuel);
    fuel = 0;
}
console.log(Math.min(...fuelArray));