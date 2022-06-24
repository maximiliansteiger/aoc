const { input } = require('./readData');

let arr = input.split('\n').map(Number);
let counter = 0;
for (let i = 0; i < arr.length; i++) {
   counter += (arr[i] < arr[i + 1]) ? 1 : 0;
}
console.log(counter);
