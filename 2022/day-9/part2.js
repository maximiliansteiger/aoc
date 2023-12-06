const { input } = require('./readData');

let instructions = input.split('\r\n').map((instruction) => {
    let [action, value] = instruction.split(' ');
    return { action, value: parseInt(value) };
});

let arr = new Array(5000).fill("O").map(() => new Array(1000).fill("O"));

let positionHead = { x: 1000, y: 1000 };

class Tail {
    constructor(x, y, head) {
        this.x = x;
        this.y = y;
        this.head = head;
    }

}

let tail1 = new Tail(1000, 1000, positionHead);
let tail2 = new Tail(1000, 1000, tail1);
let tail3 = new Tail(1000, 1000, tail2);
let tail4 = new Tail(1000, 1000, tail3);
let tail5 = new Tail(1000, 1000, tail4);
let tail6 = new Tail(1000, 1000, tail5);
let tail7 = new Tail(1000, 1000, tail6);
let tail8 = new Tail(1000, 1000, tail7);
let tail9 = new Tail(1000, 1000, tail8);


let tails = [tail1, tail2, tail3, tail4, tail5, tail6, tail7, tail8, tail9];


instructions.forEach(instruction => {
    for (let i = 0; i < instruction.value; i++) {
        
        let lastHeadPos = { ...positionHead };
        movePosition(instruction.action);
        if (Math.abs(positionHead.x - tail.x) < 2 && Math.abs(positionHead.y - tail.y) < 2) {
        } else {
            tail = lastHeadPos;
            let diff = Math.abs(positionHead.x - tail.x) + Math.abs(positionHead.y - tail.y);
            console.log(diff);
        }
        arr[tail.x][tail.y] = "X";
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


//track position change and all other positions should follow

