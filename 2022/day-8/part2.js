const { input } = require('./readData');

let trees = input.split('\r\n');
console.table(trees);

let visibleArr = new Array(trees.length).fill(0).map(() => new Array(trees[0].length).fill(1));


let highest = 0;

for (let r = 1; r < trees.length - 1; r++) {
    for (let c = 1; c < trees[r].length - 1; c++) {

        let tree = trees[r][c]
        let score = 1
        let dirscore = 0

        for (let y = r - 1; y >= 0; y--) {
            dirscore++;
            if (trees[y][c] >= tree) break;
        }
        score *= dirscore;


        dirscore = 0;
        for (let x = c - 1; x >= 0; x--) {
            dirscore++;
            if (trees[r][x] >= tree) break;
        }
        score *= dirscore;

        dirscore = 0;
        for (let y = r + 1; y < trees[r].length; y++) {
            dirscore++;
            if (trees[y][c] >= tree) break;
        }
        score *= dirscore;

        dirscore = 0;
        for (let x = c + 1; x < trees.length; x++) {
            dirscore++;
            if (trees[r][x] >= tree) break;
        }
        score *= dirscore;

        if (score > highest) highest = score;
    }
}

console.log(highest);