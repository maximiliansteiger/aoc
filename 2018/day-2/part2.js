const {
    input
} = require('./readData');

let arr = input.split("\r\n");

function checkSimilarity(a, b) {
    let diff = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            diff++;
        }
    }
    return diff == 1;
}
for (string of arr) {
    for (string2 of arr) {
        if (checkSimilarity(string, string2)) {
            let common = "";
            for (let i = 0; i < string.length; i++) {
                if (string[i] == string2[i]) {
                    common += string[i]
                }
            }
            console.log(common)
            return;
        }
    }
}