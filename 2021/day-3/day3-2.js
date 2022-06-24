const { input } = require('./readData');
let arr = input.split('\r\n');

let ox = [];
let co = [];

function getVeticalArray(arr) {
    let gammaTemp = "";
    let verticalArray = [];
    for (let j = 0; j < arr[0].length; j++) {
        for (let i = 0; i < arr.length; i++) {
            gammaTemp += arr[i][j];
        }
        verticalArray.push(gammaTemp);
        gammaTemp = ""
    }
    return verticalArray;
}

function removeUnmatchingElements(arr, index, bit) {
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][index] == bit) {
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
}

function getmostCommonBit(bitString) {
    return (String(bitString).match(/0/g) == null)
        ? 1 : (String(bitString).match(/1/g) == null)
            ? 0 : (String(bitString).match(/0/g).length > String(bitString).match(/1/g).length)
                ? 1 : 0;
}

function getleastCommonBit(bitString) {
    return (getmostCommonBit(bitString) == 1) ? 0 : 1;
}

function oxygen(arr, bit, index) {
    if (arr.length == 1) {
        ox = arr;
        return;
    }
    bit = getmostCommonBit(getVeticalArray(arr)[index]);
    arr = removeUnmatchingElements(arr, index, bit);
    oxygen(arr, bit, ++index);
}

function co2(arr, bit, index) {
    if (arr.length == 1) {
        co = arr;
        return;
    }
    bit = getleastCommonBit(getVeticalArray(arr)[index]);
    arr = removeUnmatchingElements(arr, index, bit);
    co2(arr, bit, ++index);
}

oxygen(arr, 1, 0);
co2(arr, 1, 0);
console.log(parseInt(ox, 2) * parseInt(co, 2));