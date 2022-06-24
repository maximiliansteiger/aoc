const { input } = require('./readData');
let arr = input.split("\n").map(num => num.split("").map(Number));
let flashes = 0;
for (let i = 0; i < 100; i++) {

    // iterate through the array and increase every element by one if the number is 9 count flashes up by one
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 9) {
                arr[i][j] = 0;
                flashes++;
            } else {
                arr[i][j]++;
            }



        }

    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {

            //check if th numbers around the current number are equal to 0 if yes then set the current number to 0
            if (arr[i][j] === 0 && (arr[i][j - 1] === 0 || arr[i][j + 1] === 0 || arr[i - 1][j] === 0 || arr[i + 1][j] === 0)) {
                arr[i][j] = 0;
                flashes++;
            }



        }

    }






}
console.log(arr);
console.log(flashes);