const { input } = require('./readData');

let arr = input.split('\r\n')

let nums = arr.map(elem => {
    let num = elem.replace(/\D/g,'')
    return +(num[0] + num[num.split("").length-1])
}).reduce((a,b)=> a+b)

console.log(nums)