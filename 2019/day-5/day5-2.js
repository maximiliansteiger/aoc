const { input } = require('./readData');

let arr = input.split("\r\n").map(elem => elem.replace(" -> ", ",").split(",").map(Number));
let largestX = 0;
let largestY = 0;
let floor = [];
for (const cords of arr) {//find largest X and Y for array dimensions
    largestX = (cords[0] > largestX) ? cords[0] : largestX;
    largestY = (cords[1] > largestY) ? cords[1] : largestY; 
    largestX = (cords[2] > largestX) ? cords[2] : largestX; 
    largestY = (cords[3] > largestY) ? cords[3] : largestY; 
}
for (let i = 0; i <= largestY; i++) {//create array
    floor.push([])
    for (let j = 0; j <= largestX; j++) {
        floor[i].push(0)
    }
}
for (const cords of arr) {//loop trough array and increase value of each cord
    let x1 = cords[0];
    let y1 = cords[1];
    let x2 = cords[2];
    let y2 = cords[3];
    horizontal(x1, y1, x2, y2);
    vertical(x1, y1, x2, y2);
    diagonal(x1, y1, x2, y2);
}
//funciotns
function horizontal(x1, y1, x2, y2) {
    if (x1 == x2) {
        if (y1 > y2) {
            for (let i = y2; i <= y1; i++) {
                floor[i][x1]++;
            }
        } else {
            for (let i = y1; i <= y2; i++) {
                floor[i][x1]++;
            }
        }
    }
}
function vertical(x1, y1, x2, y2) {
    if (y1 == y2) {
        if (x1 > x2) {
            for (let i = x2; i <= x1; i++) {
                floor[y1][i]++;
            }
        } else {
            for (let i = x1; i <= x2; i++) {
                floor[y1][i]++;
            }
        }
    }

}
function diagonal(x1, y1, x2, y2) {
    if (x1 > x2 && y1 > y2) {
        for (let i = 0; i <= x1 - x2; i++) {
            floor[y1 - i][x1 - i]++;
        }
    }
    if (x1 > x2 && y1 < y2) {
        for (let i = 0; i <= x1 - x2; i++) {
            floor[y1 + i][x1 - i]++;
        }
    }
    if (x1 < x2 && y1 > y2) {
        for (let i = 0; i <= x2 - x1; i++) {
            floor[y1 - i][x1 + i]++;
        }
    }
    if (x1 < x2 && y1 < y2) {
        for (let i = 0; i <= x2 - x1; i++) {
            floor[y1 + i][x1 + i]++;
        }
    }
}

let checkCrossings = () =>{
    let cnt = 0;
    for (const line of floor) {
        for (const elem of line) {
            if (elem > 1) {
                cnt++;
            }
        }
    }
    return cnt;
}

console.log(checkCrossings());