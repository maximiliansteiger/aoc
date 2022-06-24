const { input } = require('./readData');
let arr = input.split('\r\n');
let gammaTemp = "";
let gamma = "";
let epsilon = "";
for (let j = 0; j < arr[0].length; j++) {
    for (let i = 0; i < arr.length; i++) {
        gammaTemp += arr[i][j];
    }
    gamma += (gammaTemp.match(/0/g).length > gammaTemp.match(/1/g).length) ? 0 : 1;
    epsilon += (gammaTemp.match(/0/g).length > gammaTemp.match(/1/g).length) ? 1 : 0;
    gammaTemp = ""
}
console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));