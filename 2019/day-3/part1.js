const { input } = require('./readData');

let inpArr = input.split('\r\n')

let firstWire = inpArr[0].split(',')
let secondWire = inpArr[1].split(',')

//getSize of array
let sizeOfArray = firstWire.map(instruction => +instruction.slice(1))
sizeOfArray.push(...secondWire.map(instruction => +instruction.slice(1)))
sizeOfArray = sizeOfArray.sort((a, b) => b - a)[0]


//create array with size of sizeOfArray

let arr = new Array(sizeOfArray).fill(0).map(() => new Array(sizeOfArray).fill(0));

let pos1 = [50, 50]
let pos2 = [0, 0]


for (let i = 0; i < firstWire.length; i++) {

    switch (firstWire[i][0]) {
        case "L":
            moveLeft(pos1, +firstWire[i].slice(1))
            break;
        case "R":
            moveRight(pos1, +firstWire[i].slice(1))
            break;
        case "U":
            moveUp(pos1, +firstWire[i].slice(1))
            break;
        case "D":
            moveDown(pos1, +firstWire[i].slice(1))
            break;
    }
    console.log(firstWire[i]);
}

function moveLeft(pos, steps) {
    for (let i = 0; i < steps; i++) {
        pos[0]--
        arr[pos[0]][pos[1]]++
    }
}

function moveRight(pos, steps) {
    console.log(pos);
    for (let i = 0; i < steps; i++) {
        pos[0]++
        arr[pos[0]][pos[1]]++
    }
}

function moveUp(pos, steps) {
    for (let i = 0; i < steps; i++) {
        pos[1]++
        arr[pos[0]][pos[1]]++
    }
}

function moveDown(pos, steps) {
    for (let i = 0; i < steps; i++) {
        pos[1]--
        arr[pos[0]][pos[1]]++
    }
}





// console.log(arr);