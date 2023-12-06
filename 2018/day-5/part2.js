const {
    input
} = require('./readData');

let isClean = false;
let lowest = input.length;

for (let i = 97; i < 123; i++) {
    let str = input;

    let char = String.fromCharCode(i);
    let charUpper = String.fromCharCode(i - 32);

    str = str.replaceAll(char, "");
    str = str.replaceAll(charUpper, "");
    str = str.split("")

    while (!isClean) {
        let changes = 0;
        for (let i = 0; i < str.length - 1; i++) {
            if (Math.abs(str[i].charCodeAt(0) - str[i + 1].charCodeAt(0)) == 32) {
                str.splice(i, 2);
                changes++;
            }
        }
        isClean = changes == 0;
    };
    isClean = false
    if (lowest > str.length) {
        lowest = str.length
    }
}

console.log(lowest);