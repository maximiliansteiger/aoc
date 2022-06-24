let nums = new Array(10);
console.log(require('./readData').input.split('\r\n').map(line => {
    let key = line.split(" | ")[0].split(" ").sort((a, b) => a.length - b.length);
    nums[1] = key[0];
    nums[7] = key[1];
    nums[4] = key[2];
    nums[8] = key[9];
    let fiveLetters = [key[3], key[4], key[5]];
    let sixLetters = [key[6], key[7], key[8]];
    nums[6] = sixLetters.filter(str => (!str.includes(nums[1].split("")[0]) || !str.includes(nums[1].split("")[1])))[0];
    sixLetters.splice(sixLetters.indexOf(nums[6]), 1);
    nums[3] = fiveLetters.filter(str => (str.includes(nums[1].split("")[0]) && str.includes(nums[1].split("")[1])))[0];
    fiveLetters.splice(fiveLetters.indexOf(nums[3]), 1);
    nums[0] = sixLetters.filter(str => (!str.split("").includes(nums[4].split("").filter((letter) => (nums[3].split("").filter(elem => !nums[1].includes(elem)).join("").includes(letter)))[0])))[0];
    sixLetters.splice(sixLetters.indexOf(nums[0]), 1);
    nums[9] = sixLetters[0];
    nums[2] = fiveLetters.filter(str => (str.split("").includes(nums[8].split("").filter((letter) => !nums[6].split("").includes(letter))[0])))[0]
    fiveLetters.splice(fiveLetters.indexOf(nums[2]), 1);
    nums[5] = fiveLetters[0];
    return +line.split(" | ")[1].split(" ").map((number) => number.split("").sort().join("")).map((number) => (nums.map((num) =>(num.split("").sort().join("") === number) ? nums.indexOf(num) : "").filter(num => Number.isInteger(num)).join(""))).join("");
}).reduce((a, b) => a + b));










const { input } = require('./readData');
let arr = input.split('\r\n');

let mapNumbers = new Array(10);
let resultArr = [];

for (const line of arr) {

    let key = line.split(" | ")[0].split(" ").sort((a, b) => a.length - b.length);

    //easy ones: 
    // 1 is the only one with 2 letter (is the 1st in array)
    mapNumbers[1] = key[0];
    // 7 is the only one with 3 letters (is 2nd in array)
    mapNumbers[7] = key[1];
    // 4 ist the only one with 4 letters (is the 3th in array)
    mapNumbers[4] = key[2];
    // 8 is the only one with 7 letters (is the 9th in array)
    mapNumbers[8] = key[9];

    let fiveLetters = [];
    fiveLetters.push(key[3]);
    fiveLetters.push(key[4]);
    fiveLetters.push(key[5]);

    let sixLetters = [];
    sixLetters.push(key[6]);
    sixLetters.push(key[7]);
    sixLetters.push(key[8]);

    //look if it does not contain either the first or second letter of one it it does it is number 6 
    mapNumbers[6] = findSix(sixLetters, mapNumbers[1]);
    sixLetters.splice(sixLetters.indexOf(mapNumbers[6]), 1);

    //look if string contains the letters from one, if it does its three
    mapNumbers[3] = findThree(fiveLetters, mapNumbers[1]);
    fiveLetters.splice(fiveLetters.indexOf(mapNumbers[3]), 1);

    //remove the letters from 3 that match the letters from 1. now you have the middle parts
    //look withing four whitch one is the middle middle part and 
    //check if the strings with length 6 contain the middle part if not now you have 0 and also 9
    mapNumbers[0] = findZero(sixLetters, mapNumbers[1], mapNumbers[3], mapNumbers[4]);
    sixLetters.splice(sixLetters.indexOf(mapNumbers[0]), 1);

    //only number left with length 6 is number 9
    mapNumbers[9] = sixLetters[0];

    // take eight and remove the letters from six from it now check if it notains the only letter left it does its 2 it it doenst its 5
    mapNumbers[2] = findTwo(fiveLetters, mapNumbers[8], mapNumbers[6]);
    fiveLetters.splice(fiveLetters.indexOf(mapNumbers[2]), 1);

    //only number left with length 5 is number 5
    mapNumbers[5] = fiveLetters[0];


    let numbers = "";
    
    line.split(" | ")[1].split(" ").map((number) => number.split("").sort().join("")).forEach((number) => {

        for (let i = 0; i < mapNumbers.length; i++) {

            if (mapNumbers[i].split("").sort().join("") === number) {
                numbers += i;
                break;
            }

        }
    });

    resultArr.push(+numbers);

}


function findSix(arr, one) {
    for (str of arr) {
        if (!str.includes(one.split("")[0]) || !str.includes(one.split("")[1])) {
            return str;
        }
    }
}
function findThree(arr, one) {

    for (str of arr) {
        if (str.includes(one.split("")[0]) && str.includes(one.split("")[1])) {
            return str;
        }
    }
}
function findZero(arr, one, three, four) {
    three = three.split("");
    four = four.split("");
    let middlePart = "";

    //remove letters from one from letters from three
    for (let i = 0; i < three.length; i++) {
        if (one.includes(three[i])) {
            three.splice(i, 1);
            i--;
        }
    }

    for (const letter of four) {
        if (three.includes(letter)) {
            middlePart = letter;
            break;
        }
    }
    for (const str of arr) {
        if (!str.split("").includes(middlePart)) {
            return str;
        }
    }

}
function findTwo(arr, eight, six) {
    eight = eight.split("");
    six = six.split("");

    for (let i = 0; i < eight.length; i++) {
        if (six.includes(eight[i])) {
            eight.splice(i, 1);
            i--;
        }
    }
    for (const str of arr) {
        if (str.split("").includes(eight[0])) {
            return str;
        }
    }


}

console.log(resultArr.reduce((a, b) => a + b));
