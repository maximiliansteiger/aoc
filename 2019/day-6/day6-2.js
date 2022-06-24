const { input } = require('./readData');

function findSolution(input, days) {
    let init = input.split(',').map(Number);
    let count = [];
    for (let iter of init) {
        if (count[iter] === undefined) {
            count[iter] = 0;
        }
        count[iter]++;
    }
    for (let day = 0; day < days; day++) {
        let new_count = {};
        for (let i in count) {
            let z = count[i];
            if (i > 0) {
                if (new_count[i - 1] === undefined){
                    new_count[i - 1] = 0;    
                }
                new_count[i - 1] += z;
            } else {
                if (new_count[6] === undefined) {
                    new_count[6] = 0;
                }
                if (new_count[8] === undefined) {
                    new_count[8] = 0;
                }
                new_count[6] += z;
                new_count[8] += z;
            }
        }
        count = new_count;
    }
    return Object.values(count).reduce((a, b) => a + b);
}

console.log(findSolution(input, 256));