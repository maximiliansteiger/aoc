const { input } = require('./readData');

let arr = input.split("\r\n").map(elem => elem.replace(" -> ", ",").split(",").map(Number));
let largestX = 0;
let largestY = 0;
let floor = [];
let cnt = 0;
for (const cords of arr) {  //find largest X and Y for array dimensions
    if (cords[0] > largestX) {
        largestX = cords[0]
    }
    if (cords[1] > largestY) {
        largestY = cords[1]
    }
    if (cords[2] > largestX) {
        largestX = cords[2]
    }

    if (cords[3] > largestY) {
        largestY = cords[3]
    }

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
    if (x1 == x2) { //horizontal
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
    if (y1 == y2) {//vertical
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
for (const line of floor) {
    for (const elem of line) {
        cnt += (elem > 1) ? 1 : 0;
    }
}
console.log(cnt);