const { input } = require('./readData');

let arr = input.split("");

let posX = 0;
let posY = 0;
let visited = {};
let count = 0;

for (const move of arr) {
    posX += move === '>' ? 1 : move === '<' ? -1 : 0;
    posY += move === '^' ? 1 : move === 'v' ? -1 : 0;
    visited[`${posX},${posY}`] = ++count;
}

console.log(Object.keys(visited).length+1); //plus 1 because we start at 0,0