const {
    input
} = require('./readData');

let arr = input.split("\r\n");
let sum = 0;

arr.forEach(str => {

    let splitArr = str.split("[");
    let letters = splitArr[0].replaceAll(/\d|\W/g, "")
    let roomNrArr = splitArr[0].split("-")
    let roomNr = roomNrArr[roomNrArr.length - 1];
    let search = splitArr[1].replace("]", "");

    let mostCommon = {};
    letters.split("").forEach(letter => {
        mostCommon[letter] = letters.split(letter).length - 1;
    })

    
    let most5 = sortObj(mostCommon)
    console.log(most5);

})


function sortObj(obj) {
    return Object
        .entries(obj)
        .sort((a, b) => {
            if (b[1] != a[1]) {
                return b[1] - a[1];
            }
        })
}