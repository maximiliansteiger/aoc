const {
    input
} = require('./readData');

let arr = input.split('\r\n')
arr = arr.map(x => x.split("-").sort()).sort();
// solve(arr);
console.log(arr.filter(x => x.includes("end")));



function solve(arr) {
    let paths = ["start"];
    for (let i = 0; i < 5; i++) {
        let newPaths = findNewPaths(arr, paths);
        console.log(newPaths);
        paths = newPaths;
    }

}


function findNewPaths(arr, paths) {
    let newPaths = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(paths[paths.length - 1])) {
            newPaths.push(arr[i].filter(x => x !== paths[paths.length - 1])[0]);
        }
    }
    return newPaths;
}