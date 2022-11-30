const {
    input
} = require('./readData');

let cnt = 0;

let arr = input.split("\r\n");

// qzmt-zixmtkozy-ivhz-343[izmtk]
// qzmt-zixmtkozy-ivhz-343

arr.forEach((item, index) => {
    let arr = item.split("[")
    let sectorId = +arr[0].split("-").pop();
    let words = arr[0].split("-").slice(0, -1);

    // console.log(sectorId, words);

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let newWord = "";
        for (let j = 0; j < word.length; j++) {
            newWord += rotateLetterXAmountOfTimes(sectorId, word[j]);
        }
        words[i] = newWord;
    }
    // console.log(words.join(" "), sectorId);
    if (words.includes("object")) {
        console.log(words.join(" "), sectorId);
    }
});

function rotateLetterXAmountOfTimes(x, letter) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let index = alphabet.indexOf(letter);
    let newIndex = (index + x) % alphabet.length;
    return alphabet[newIndex];
}