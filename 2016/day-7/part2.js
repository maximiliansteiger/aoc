const {
    input
} = require('./readData');

let arr = input.split("\r\n")

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    let words = arr[i].split(/[\[\]]/);
    let outsideBrackets = words.filter((word, index) => index % 2 === 0).filter(word => checkSSL(word));
    let insideBrackets = words.filter((word, index) => index % 2 !== 0).filter(word => word.includes(outsideBrackets))[0] != undefined;

    if (outsideBrackets[0] != undefined && !insideBrackets) {
        sum++;
    }
}

console.log(sum);

function checkSSL(words) {
    for (let i = 0; i < words.length; i++) {
        if (words[i] === words[i + 2] && words[i + 1] !== words[i]) {
            return words[i + 1] + words[i] + words[i + 1];
        }
    }
    return undefined;
}