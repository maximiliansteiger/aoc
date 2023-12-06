const {
    input
} = require('./readData');

let arr = input.split("\r\n")

console.log(arr);


//loop though the array and create a map of values called position and velocity 
// the strings in the array look like This: 'position=< 9,  1> velocity=< 0,  2>'

let posVelMap = arr.map((item) => {
    let position = item.slice(10, 17).split(',').map((item) => parseInt(item));
    let velocity = item.slice(28, 34).split(',').map((item) => parseInt(item));
    return {
        position,
        velocity
    }
})

let totalMaxX = 0;
let totalMaxY = 0;


posVelMap.forEach((item) => {
    item.position[0] += 100000;
    item.position[1] += 100000;
    totalMaxX = Math.max(totalMaxX, item.position[0] + 20);
    totalMaxY = Math.max(totalMaxY, item.position[1] + 20);
})

let map = new Array(100000).fill('.').map(() => new Array(100000).fill('.'));

for (let i = 0; i < 5; i++) {
    map = new Array(100000).fill('.').map(() => new Array(100000).fill('.'));
    posVelMap.forEach((item) => {
        map[item.position[1]][item.position[0]] = "#";
    })
    posVelMap.forEach((item) => {
        item.position[0] += item.velocity[0];
        item.position[1] += item.velocity[1];
    })
    console.log(map.map(item => item.join('')).join('\n'));
    console.log('\n');
}