const { input } = require('./readData');
let arr = input.split("\r\n").join('-').split('---');

let cords = arr[0].split("-").map(elem => elem.split(","));
let instr = arr[1].split("-");

let largestX = 10;
let largestY = 14;

let largeArr = new Array(largestY).fill(new Array(largestX).fill("."));

console.log(cords);
// console.log(instr)

largeArr[5][2] = "#";
console.log(largeArr);



printArr()




// for(const cord of cords){

//     let x = +cord[0];
//     let y = +cord[1];

//     largeArr[0][0] = "#";


// }














function printArr() {
    for(line of largeArr){
        console.log(line.join(" "));
    }
}