const {
    input
} = require('./readData');

//     0
// 3       1
//     2

let arr = input.split(', ');
let facingDirection = 0;
//   x  y
let cords = [0, 0];

let storage = [];
let ansArr = [];

arr.forEach(item => {
    item = item.split('');
    let direction = item[0];
    item.shift()
    let distance = +item.join('');

    // console.log(distance);
    if (facingDirection === 0) {
        if (direction === 'R') {
            facingDirection = 1;
        } else {
            facingDirection = 3;
        }
    } else if (facingDirection === 1) {
        if (direction === 'R') {
            facingDirection = 2;
        } else {
            facingDirection = 0;
        }
    } else if (facingDirection === 2) {
        if (direction === 'R') {
            facingDirection = 3;
        } else {
            facingDirection = 1;
        }
    } else if (facingDirection === 3) {
        if (direction === 'R') {
            facingDirection = 0;
        } else {
            facingDirection = 2;
        }
    }


    if (facingDirection == 0) {
        cords[0] += distance;
    }
    if (facingDirection == 1) {
        cords[1] += distance;
    }
    if (facingDirection == 2) {
        cords[0] -= distance;
    }
    if (facingDirection == 3) {
        cords[1] -= distance;
    }
    let sol  = 0;
    storage.forEach(item => {
        if (item[0] === cords[0] && item[1] === cords[1]) {
            // console.log(cords);
            sol = Math.abs(0 - cords[0]) + Math.abs(0 - cords[1]);
            console.log(sol); 
        }
        
    });
    ansArr.push(sol);
    storage.push(cords);
});
console.log(ansArr);

// abs(x1 - x2) + abs(y1 - y2)