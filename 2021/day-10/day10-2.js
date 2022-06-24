const { input } = require('./readData');
let arr = input.split("\r\n");

let solutionArray = [];

for (str of arr) {
    let num = findError(str)
    if (num != undefined) {
        solutionArray.push(num)
    }
}
//solution
console.log(solutionArray.sort((a,b) => a-b)[(solutionArray.length - 1)/2]);


function findError(str) {
    let cnt = 0;
    while (cnt < 40) {
        str = str.replace("()", "").replace("{}", "").replace("[]", "").replace("<>", "");
        cnt++;
    }
    if (str.includes(')') || str.includes('}') || str.includes(']') || str.includes('>')) {
        return;
    }
    str = str.replaceAll("(", "1").replaceAll("{", "3").replaceAll("[", "2").replaceAll("<", "4").split("").map(Number).reverse();
    let sum = 0;
    for (elem of str) {
        sum *= 5;
        sum += elem;
    }
    return sum
}
