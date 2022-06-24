const { input } = require('./readData');
let template = "NNCB";

let nextStr = "";

let str = getWordPair(template)
let isFirst = true;
let cnt = 0;
let finalStr = "";

while (cnt < 10) {

    for (pairs of str) {
        if (str.indexOf(pairs) == 0) {
            isFirst = true;
        } else {
            isFirst = false;
        }
        // console.log(pairs, genNextStr(pairs));
        nextStr += genNextStr(pairs, isFirst);
    }
    
    console.log(nextStr);
    if(cnt == 9){
        finalStr = nextStr;
    }
    str = getWordPair(nextStr);
    nextStr = ""
    cnt++


}

finalStr = finalStr.split("");
let n = finalStr.filter(elem => elem == 'N').length;
let c = finalStr.filter(elem => elem == 'C').length;
let h = finalStr.filter(elem => elem == 'H').length;
let b = finalStr.filter(elem => elem == 'B').length;

console.log(n, c, h, b);




function genNextStr(wordPair, isFirst) {
    let nextStr = "";
    switch (wordPair) {
        case 'CH': nextStr = 'CBN'; break;
        case 'HH': nextStr = 'HNH'; break;
        case 'CB': nextStr = 'CHB'; break;
        case 'NH': nextStr = 'NCH'; break;
        case 'HB': nextStr = 'HCB'; break;
        case 'HC': nextStr = 'HBC'; break;
        case 'HN': nextStr = 'HCN'; break;
        case 'NN': nextStr = 'NCN'; break;
        case 'BH': nextStr = 'BHH'; break;
        case 'NC': nextStr = 'NBC'; break;
        case 'NB': nextStr = 'NBB'; break;
        case 'BN': nextStr = 'BBN'; break;
        case 'BB': nextStr = 'BNB'; break;
        case 'BC': nextStr = 'BBC'; break;
        case 'CC': nextStr = 'CNC'; break;
        case 'CN': nextStr = 'CCN'; break;
        default:
    }
    if (!isFirst) {
        nextStr = nextStr.split('')
        // console.log(nextStr);
        nextStr.shift();
        // console.log(nextStr);
        nextStr = nextStr.join('').replace(',', '');
        // console.log(nextStr);
    }

    return nextStr;
}
function getWordPair(str) {
    let pair = [];
    for (let i = 0; i < str.length - 1; i++) {
        pair.push(str[i] + str[i + 1]);
    }
    return pair;
}