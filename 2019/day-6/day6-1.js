const { input } = require('./readData');
let arr = input.split(',').map(Number);
let days = 0;
while (days < 256) {
    arr = arr.map(state => --state);
    arr.map(state => state === -1 ? arr.push(8) : null);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === -1) {
            arr[i] = 6;
        }
    }
    days++;
}
console.log(arr.length);