const { input } = require('./readData');

let arr = input.split("\r\n").map(
    instr =>
        instr.replaceAll("A", "1")
            .replaceAll("B", "2")
            .replaceAll("C", "3")
            .replaceAll("X", "1")
            .replaceAll("Y", "2")
            .replaceAll("Z", "3")
);

function solveSingle(instr) {
    let arr = instr.split(" ").map(Number);
    if (arr[0] == arr[1]) return arr[1] + 3;
    if ((arr[0] == 1 && arr[1] == 2) || (arr[0] == 2 && arr[1] == 3) || (arr[0] == 3 && arr[1] == 1)) {
        return arr[1] + 6;
    } else {
        return arr[1];
    }
}

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += solveSingle(arr[i]);
}
console.log(sum);