const { input } = require('./readData');

let sections = input.split('\r\n');
let cnt = sections.map((section) => {
    let s1 = section.split(',');
    return checkIfContains(s1[0].split(' '), s1[1].split(' ')) ? 1 : 0;
}).reduce((a, b) => a + b);

function checkIfContains(p1, p2) {
    p1 = p1[0].split('-');
    p2 = p2[0].split('-');
    return (+p1[0] <= +p2[0] && +p1[1] >= +p2[1]) || (+p2[0] <= +p1[0] && +p2[1] >= +p1[1])
}

console.log(cnt);