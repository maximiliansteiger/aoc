const {
    input
} = require('./readData');

let arr = input.split("\r\n")

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    let words = arr[i].split(/[\[\]]/);
    let outsideBrackets_ABBA = words.filter((word, index) => index % 2 === 0).filter(word => checkLTS(word));
    let insideBrackets_ABBA = words.filter((word, index) => index % 2 !== 0).filter(word => checkLTS(word));

    if (outsideBrackets_ABBA[0] != undefined && insideBrackets_ABBA.length == 0) {
        sum++;
    }
}

console.log(sum);

function checkLTS(words) {
    for (let i = 0; i < words.length; i++) {
        if (words[i + 1] == words[i + 2] && words[i] == words[i + 3] && words[i] != words[i + 1]) {
            return true;
        }
    }
    return false;
}