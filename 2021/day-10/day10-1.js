const { input } = require('./readData');
let arr = input.split("\r\n");

let bracket1 = 0; // ()
let bracket2 = 0; // {}
let bracket3 = 0; // []
let bracket4 = 0; // <>


for (str of arr) {
    findError(str)
}


function findError(str) {
    let cnt = 0;
    let change = false;
    while (cnt < 30) {
        str = str.replace("()", "").replace("{}", "").replace("[]", "").replace("<>", "");
        cnt++;
    }

    for (character of str) {
        switch (character) {
            case ')': bracket1++
                change = true; break;
            case '}': bracket2++;
                change = true; break;
            case ']': bracket3++;
                change = true; break;
            case '>': bracket4++;
                change = true; break;
            default:
                break;
        }
        if (change) {
            return;
        }
    }

}
console.log(bracket1 * 3 + bracket2 * 1197 + bracket3 * 57 + bracket4 * 25137 );