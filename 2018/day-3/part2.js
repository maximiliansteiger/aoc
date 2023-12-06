const {
    input
} = require('./readData');

let arr = input.split('\n');
let grid = new Array(1000).fill(0).map(() => new Array(1000).fill(0));

for (let i = 0; i < arr.length; i++) {
    let [x, y] = arr[i].split(" ")[2].split(",")
    x = +x.replace(/\D/g, '');
    y = +y.replace(/\D/g, '');
    let [width, height] = arr[i].split(" ")[3].split("x");
    width = +width;
    height = +height;
    for (let j = x; j < x + width; j++) {
        for (let k = y; k < y + height; k++) {
            grid[j][k] += 1;
        }
    }
}

beautyPrintOfTable(grid);
let answer = findPositionOfValue1(grid);
console.log(answer);

function beautyPrintOfTable(table) {
    for (let i = 0; i < table.length; i++) {
        let row = "";
        for (let j = 0; j < table[i].length; j++) {
            row += table[i][j] + " ";
        }
        console.log(row);
    }
}
function findPositionOfValue1(table) {
    for (let i = 0; i < arr.length; i++) {
        let [x, y] = arr[i].split(" ")[2].split(",")
        x = +x.replace(/\D/g, '');
        y = +y.replace(/\D/g, '');
        let [width, height] = arr[i].split(" ")[3].split("x");
        width = +width;
        height = +height;
        if (table[x][y] == 1) {
            let isNotOverlapping = true;
            for (let j = x; j < x + width; j++) {
                for (let k = y; k < y + height; k++) {
                    if (table[j][k] != 1) {
                        isNotOverlapping = false;
                    }
                }
            }
            if (isNotOverlapping) {
                return arr[i].split(" ")[0];
            }
        }
    }


}