const { input } = require('./readData');

let arr = input.split("\r\n")

let part2 = 0;
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
    dirSizes.push(size)
    return [size, path];
}

let totalSize = parseInput(0)[0];
let sizeToDelete = 30000000 - (70000000 - totalSize);
part2 = Math.min(...dirSizes.sort((a, b) => a - b).filter(a => a > sizeToDelete));

console.log(part2);
