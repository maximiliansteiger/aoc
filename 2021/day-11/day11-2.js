const { input } = require('./readData');
let arr = input.split("\r\n").map(num => num.split("").map(Number));


let flashes = 0;
let ind = 0;

let allZero = false;

while (!allZero) {
    console.log(`Step ${ind}\n`);
    printArr(arr);

    incrArr(arr);
    let localIncr = 1
    
    while (localIncr != 0) {
        localIncr = incrNeighbors(arr);
        console.log(localIncr);
    }
    ind++
    allZero = checkIfAllZero(arr)
    if(allZero) {
        console.log("All zero on Position: " + ind);
    }


}


function checkIfAllZero(arr) {
    let allZero = true;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] > 0) {
                allZero = false;
            }
        }
    }
    return allZero;
}


function printArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] + "");
    }
    console.log("\n");
}

function incrArr(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr[0].length; j++) {
                arr[i][j]++
        }
    }
}

function incrNeighbors(arr) {
    let localIncr = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] >= 10) {
                flashes++
                localIncr++
                arr[i][j] = 0;

                //increase all neighboring also diagonal cells if the cell is greater than 0
                if (arr[i - 1] && arr[i - 1][j] > 0) {
                    arr[i - 1][j]++;
                }
                if (arr[i + 1] && arr[i + 1][j] > 0) {
                    arr[i + 1][j]++;
                }
                if (arr[i][j - 1] > 0) {
                    arr[i][j - 1]++;
                }
                if (arr[i][j + 1] > 0) {
                    arr[i][j + 1]++;
                    
                }
                if (arr[i - 1] && arr[i - 1][j - 1] > 0) {
                    arr[i - 1][j - 1]++;
                }
                if (arr[i - 1] && arr[i - 1][j + 1] > 0) {
                    arr[i - 1][j + 1]++;
                                }
                if (arr[i + 1] && arr[i + 1][j - 1] > 0) {
                    arr[i + 1][j - 1]++;
                }
                if(arr[i + 1] && arr[i + 1][j + 1] > 0) {
                    arr[i + 1][j + 1]++;
                }

            }

        }
    }
    return localIncr;
}

console.log(flashes);