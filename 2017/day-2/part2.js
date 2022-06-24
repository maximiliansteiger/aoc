const {
    input
} = require('./readData');


let arr = input.split("\n").map(e => e.split("\t").map(Number));

// console.log(arr);

arr.forEach(e => {
    for (let i = 0; i < e.length-1; i++) {
        if (e[i]% e[i + 1] == 0) {
            console.log(`${e[i]}/${e[i + 1]} = ${e[i]/e[i + 1]}`);
        }
    }
})