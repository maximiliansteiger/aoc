const { input } = require('./readData');

let arr = input.split(",").map(Number);

function run(){
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
}

while (arr[0] !== 19690720) {
    arr = input.split(",").map(Number);
    arr[1] = Math.floor(Math.random() * 99);
    arr[2] = Math.floor(Math.random() * 99);
    run();
}
console.log(100 * arr[1] + arr[2]);
