const { input } = require('./readData');

let arr = input.split('\n').map(Number)
let totalSum = 0;

arr.forEach(number => {
   let sum = 0;
   while (number > 1) {
      number = Math.floor(number / 3) - 2;
      console.log(number);
      if (number > 0) {
         sum += number;
      }
   }
   console.log();
   totalSum += sum;
})

console.log(totalSum);
