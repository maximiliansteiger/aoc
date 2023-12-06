const { input } = require('./readData');

let instructions = input.split('\r\n').map((instruction) => {
    let [action, value] = instruction.split(' ');
    return { action, value: parseInt(value) };
});

let arr = new Array(5000).fill("O").map(() => new Array(1000).fill("O"));

let positionHead = { x: 1000, y: 1000 };
let positionTail = { x: 1000, y: 1000 };

instructions.forEach(instruction => {
    for (let i = 0; i < instruction.value; i++) {
        let lastHeadPos = { ...positionHead };
        movePosition(instruction.action);
        if (Math.abs(positionHead.x - positionTail.x) < 2 && Math.abs(positionHead.y - positionTail.y) < 2) {
        } else {
            positionTail = lastHeadPos;
        }
        arr[positionTail.x][positionTail.y] = "X";
    }
});
let sol = 0;
arr.forEach(row => {
    row.forEach(col => {
        if (col === "X") {
            sol++;
        }
    })
})
console.log(sol);

function movePosition(action) {
    switch (action) {
        case 'R':
            positionHead.x++;
            break;
        case 'L':
            positionHead.x--;
            break;
        case 'U':
            positionHead.y++;
            break;
        case 'D':
            positionHead.y--;
            break;
    }

}