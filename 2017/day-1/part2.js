const { input } = require('./readData');

let arr = input;
let sum = 0;
arr = arr.split('').map(Number);
let j = arr.length/2;
console.log(arr);

for (let i = 0; i < arr.length-1; i++) {

    if (i == arr.length/2) {
        j = 0;
    }
    if (arr[i] == arr[j]) {
        sum += arr[i];
    }
    j++;
}

console.log(sum);
