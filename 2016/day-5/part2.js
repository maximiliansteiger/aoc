const { input } = require('./readData');

//imports 
const md5 = require("blueimp-md5");

let arr = [];
findNextLetter();

function findNextLetter() {
    let cnt = 0;
    while (true) {
        let hash = md5(input + cnt);
        if (hash.startsWith("00000")) {
            if (!isNaN(hash[5]) && hash[5] < 8 && !arr[hash[5]]) {
                arr[hash[5]] = hash[6];
                console.log(arr);
                if(arr.filter(elem => elem != undefined).length == 8) {
                    console.log(arr.join(""));
                    break;
                }
            }
        }
        cnt++;
    }
}


