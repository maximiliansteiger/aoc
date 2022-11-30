const { input } = require('./readData');

//imports 
const md5 = require("blueimp-md5");

findNextLetter();

function findNextLetter() {
    let innerCNT = 0;
    let cnt = 0;
    let password = "";
        while (true) {
            let hash = md5(input + cnt);
            if (hash.startsWith("00000")) {
                password += hash[5]
                innerCNT++;
                if(innerCNT >= 8) break;
            }
            cnt++;
        }
    
    console.log(password);
}


