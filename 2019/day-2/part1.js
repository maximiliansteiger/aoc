const { input } = require('./readData');

let arr = input.split(",").map(Number);

for (let i = 0; i < arr.length; i++) {
    let theFour = arr.slice(i, i + 4);
    if (theFour[0] === 1) {
        arr[theFour[3]] = arr[theFour[1]] + arr[theFour[2]];
    } else if (theFour[0] === 2) {
        arr[theFour[3]] = arr[theFour[1]] * arr[theFour[2]];
    } else if (theFour[0] === 99) {
        break;
    }
    i += 3;
}
console.log(arr[0]);