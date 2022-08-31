const {
    input
} = require('./readData');

let arr = input.split("");

let humanPosX = 0;
let humanPosY = 0;
let robotPosX = 0;
let robotPosY = 0;


let visited = {};
let count = 2;

let robo = false;

for (const move of arr) {
    if (robo) {
        robotPosX += move === '>' ? 1 : move === '<' ? -1 : 0;
        robotPosY += move === '^' ? 1 : move === 'v' ? -1 : 0;
        visited[`${robotPosX},${robotPosY}`] = ++count;
    } else {
        humanPosX += move === '>' ? 1 : move === '<' ? -1 : 0;
        humanPosY += move === '^' ? 1 : move === 'v' ? -1 : 0;
        visited[`${humanPosX},${humanPosY}`] = ++count;
    }
    robo = !robo;
}

console.log(Object.keys(visited).length); //plus 1 because we start at 0,0