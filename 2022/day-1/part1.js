const { input } = require('./readData');

let arr = input.split("\r\n").map(Number)

let maxCNT = 0;
let cnt = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        if (cnt > maxCNT) {
            maxCNT = cnt;
        }
        cnt = 0;
    }
    cnt += arr[i]
}

console.log(maxCNT);
