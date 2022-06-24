const crypto = require('crypto')
const input = "ckczppom";
let number = 0;
while (true) {
    if (crypto.createHash('md5').update(input + number++).digest('hex').substring(0, 5) === "00000") {
        console.log(number);
        break;
    }
}