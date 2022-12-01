const { input } = require('./readData');

let arr = input.split("\r\n").map(Number)

let cntArray = [];
let cnt = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        cntArray.push(cnt);
        cnt = 0;
    }
    cnt += arr[i]
}

cntArray.sort((a, b) => b - a);

console.log(cntArray[0] + cntArray[1] + cntArray[2]);
