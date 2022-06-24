const {
    input
} = require('./readData');

let arr = input.split("\r\n");

function count_duplicate(a) {
    let counts = {}

    for (let i = 0; i < a.length; i++) {
        if (counts[a[i]]) {
            counts[a[i]] += 1
        } else {
            counts[a[i]] = 1
        }
    }
    for (let prop in counts) {
        if (counts[prop] >= 2) {
            // console.log(prop + " counted: " + counts[prop] + " times.")
        }
    }
   return counts;
}

let twiceSum = 0;
let thriceSum = 0;

arr.forEach(element => {
    element = element.split("")
    let dup = count_duplicate(element)

    twiceSum += Object.entries(dup).filter(value => {
        return value[1] == 2
    }).length > 0 ? 1 : 0

    thriceSum += Object.entries(dup).filter(value => {
        return value[1] == 3
    }).length > 0 ? 1 : 0
});


console.log(twiceSum * thriceSum);

