const {
    input
} = require('./readData');

let directions = input.split("\n");

let numpad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let code = "";
let x = 1;
let y = 1;

directions.forEach(dir => {

    dir.split("").forEach(move => {

        switch (move) {
            case "U":
                if (y != 0) {
                    y--;
                }
                break;
            case "L":
                if (x != 0) {
                    x--;
                }
                break;
            case "R":
                if (x != 2) {
                    x++;
                }
                break;
            case "D":
                if (y != 2) {
                    y++;
                }
                break;

            default:
                break;
        }
    })

    console.log(`(${x}/${y})`);
    code += numpad[y][x]

});

console.log(code);