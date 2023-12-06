const {
    input
} = require('./readData');

function inc(password, currentIndex) {
    if (currentIndex < 0) {
        password.unshift('a');
        return password;
    }

    if (password[currentIndex] === 'z') {
        password[currentIndex] = 'a';
        return inc(password, currentIndex - 1);
    } else {
        password[currentIndex] = String.fromCharCode(password[currentIndex].charCodeAt(0) + 1);
    }

    return password;
}

function isValidPassword(password) {
    if (password.includes('i') || password.includes('o') || password.includes('l')) {
        return false;
    }

    let pairs = 0;
    let hasStraight = false;

    for (let i = 0; i < password.length - 2; i++) {
        if (
            password.charCodeAt(i) === password.charCodeAt(i + 1) - 1 &&
            password.charCodeAt(i) === password.charCodeAt(i + 2) - 2
        ) {
            hasStraight = true;
            break;
        }
    }

    const pairMatches = password.match(/(.)\1/g);
    if (pairMatches && pairMatches.length >= 2) {
        pairs = 2;
    }

    return hasStraight && pairs === 2;
}

let newPassword = input.split('');

do {
    newPassword = inc(newPassword, newPassword.length - 1);
} while (!isValidPassword(newPassword.join('')));

console.log(newPassword.join(''));