const {
    input
} = require('./readData');

let arr = input.split("\r\n");

let distObj = {};
let places = [];

function getArrayMutations(arr, perms = [], len = arr.length) {
    if (len === 1) perms.push(arr.slice(0))
    for (let i = 0; i < len; i++) {
        getArrayMutations(arr, perms, len - 1)
        len % 2 // parity dependent adjacent elements swap
            ?
            [arr[0], arr[len - 1]] = [arr[len - 1], arr[0]] : [arr[i], arr[len - 1]] = [arr[len - 1], arr[i]]
    }
    return perms
}

//get all distances
arr.forEach(element => {
    let asdf = element.split(" ");
    distObj[`${asdf[0]}-${asdf[2]}`] = +asdf[4];
    places = [...new Set([...places, asdf[0], asdf[2]])];
});

let allPerms = getArrayMutations(places);
let min = Infinity;
for (let j = 0; j < allPerms.length; j++) {
    let temp = 0;
    for (let i = 0; i < allPerms[j].length - 1; i++) {
        let from = allPerms[j][i];
        let to = allPerms[j][i + 1];
        let dist = distObj[`${from}-${to}`] === undefined ? distObj[`${to}-${from}`] : distObj[`${from}-${to}`];
        temp += dist;
    }
    min = temp < min ? temp : min;
    temp = 0;
}

console.log(min);