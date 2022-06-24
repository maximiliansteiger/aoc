const {
    input
} = require('./readData');


let arr = input.split('\n');
let inpArr = [];

let cnt = 0;

arr.forEach(element => {
    element.split(' ').forEach(el => {
        inpArr.push(el)
    });
});

inpArr.forEach(eCurr => {
    inpArr.forEach(element => {
        if (eCurr === element) {
            cnt++;
            // console.log(eCurr + ' ' + element + ' ' +cnt);
        }
    });
    cnt--;
});
console.log(inpArr.length);
console.log(cnt);