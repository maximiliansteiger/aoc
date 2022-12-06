const { input } = require('./readData');

let signals = input.split("");
let n = 4;
for (let i = 0; i < signals.length; i++) {
    let firstFour = signals.slice(i, i + n);
    if (firstFour.length === new Set(firstFour).size) {
        console.log(i + n);
        break;
    }
}