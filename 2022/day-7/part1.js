const { input } = require('./readData');

let arr = input.split("\r\n")

let part1 = 0;
let dirSizes = [];

function parseInput(path) {
    let size = 0;
    for (path; path < arr.length; path++) {
        const element = arr[path].split(" ");
        if (element[2] == '..') {
            break;
        } else if (element[1] == 'cd') {
            let [dirSize, i] = parseInput(++path);
            size += dirSize;
            path = i;
        } else if (!isNaN(element[0])) {
            size += Number(element[0]);
        }
    }
    if (size < 100000) part1 += size;
    dirSizes.push(size)
    return [size, path];
}

parseInput(0)[0];
console.log(part1);
