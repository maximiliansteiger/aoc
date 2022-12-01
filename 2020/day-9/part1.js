const { input } = require('./readData');

let arr = input.split('\r\n').map(Number);

let preamble = arr.slice(0, 5);
let numbers = arr.slice(5);

let possibleSums = getPossibleSums(preamble);


for (let i = 0; i < numbers.length; i++) {
    if(!possibleSums.includes(numbers[i])){
        return numbers[i];
    }
    
}

//get all possible sums of 2 numbers in preamble
function getPossibleSums(preamble) {
    let possibleSums = [];
    for (let i = 0; i < preamble.length; i++) {
        for (let j = 0; j < preamble.length; j++) {
            if (i !== j) {
                possibleSums.push(preamble[i] + preamble[j]);
            }
        }
    }
    return possibleSums;
}



console.log(rest);