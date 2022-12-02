const { input } = require('./readData');

let arr = input.split("\r\n").map(instr => {
    instr = instr.replaceAll("A", "1");
    instr = instr.replaceAll("B", "2");
    instr = instr.replaceAll("C", "3");
    instr = instr.replaceAll("X", "1");
    instr = instr.replaceAll("Y", "2");
    instr = instr.replaceAll("Z", "3");
    return instr;
})

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += solveSingle(arr[i]);
}


function solveSingle(instr) {
    let arr = instr.split(" ").map(Number);
    switch (arr[1]) {
        case 1:
            if (arr[0] == 1) {
                return 3;
            } else if (arr[0] == 2) {
                return 1;
            } else if (arr[0] == 3) {
                return 2;
            }
            break;
        case 2:
            return arr[0] + 3
        case 3:
            if (arr[0] == 1) {
                return 2 + 6;
            } else if (arr[0] == 2) {
                return 3 + 6;
            } else if (arr[0] == 3) {
                return 1 + 6;
            }
            break;
    }
}

console.log(sum);