const {
    input
} = require('./readData');

let cnt = 0;


input.split("\r\n").forEach((item, index) => {
    let arr = item.split("[");
    let temp = arr[0].replaceAll("-", "").replaceAll("/1-9/").split("");
    let letters = temp.filter(item => isNaN(item));
    let number = +temp.filter((item) => !isNaN(item)).join("");

    if(sortLettersByOccurrence(letters).substring(0, 5) === arr[1].substring(0, 5)) {
        cnt += number;
    }
});

console.log(cnt);

//sort letter array by occurrence else by alphabet
function sortLettersByOccurrence(letters) {
    let sortedLetters = letters.sort((a, b) => {
        let countA = countOccurrenceOfEachLetters(letters)[a];
        let countB = countOccurrenceOfEachLetters(letters)[b];
        if (countA > countB) {
            return -1;
        } else if (countA < countB) {
            return 1;
        } else {
            if (a > b) {
                return 1;
            } else if (a < b) {
                return -1;
            } else {
                return 0;
            }
        }
    });
    return Array.from(new Set(sortedLetters)).join("");
}



function countOccurrenceOfEachLetters(letters) {
    let obj = {};
    letters.forEach((item) => {
        if (obj[item]) {
            obj[item] += 1;
        } else {
            obj[item] = 1;
        }
    });
    return obj;
}

