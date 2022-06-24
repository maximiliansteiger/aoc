const { input } = require('./readData');

let arr = input.split('\n').map(Number);

let firstThree,secondThree;
let counter = 0;

for (let i = 0; i < arr.length; i++) {

    firstThree = arr[i] + arr[i + 1] + arr[i + 2];
    secondThree = arr[i + 1] + arr[i + 2] + arr[i + 3];
    counter += (firstThree < secondThree) ? 1 : 0;

}

console.log(counter);