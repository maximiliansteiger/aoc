const {
    input
} = require('./readData');

let arr = input.split("")

let isClean = false;

while (!isClean) {
    let changes = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (Math.abs(arr[i].charCodeAt(0) - arr[i + 1].charCodeAt(0)) == 32) {
            arr.splice(i, 2);
            changes++;
        }
    }
    if (changes == 0) {
        isClean = true;
    }
};

console.log(arr.length);