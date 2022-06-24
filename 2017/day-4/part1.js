const { input } = require('./readData');


let stringArr = input.split('\r\n');


stringArr = stringArr.map(element => {
    let arr = element.split(' ');
    return new Set(arr).size == arr.length?1:0;
});

console.log(stringArr.reduce((a,b)=>a+b));