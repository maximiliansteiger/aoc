const { input } = require('./readData');

let arr = input.split("\r\n").map(Number)
let numArr = [0]

let sum = 0
let condi = true
while(condi){
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if(numArr.includes(sum)) {
            console.log(sum)
            condi = false
            break;
        }else{
            numArr.push(sum)
        }
    }
}

