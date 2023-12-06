const { input } = require('./readData');

let trees = input.split('\r\n');

function splitOnPosition(arr, position) {
    let leftHalf = arr.slice(0, position - 1);
    let rightHalf = arr.slice(position);
    return [leftHalf, rightHalf];
}

let visibleArr = new Array(trees.length).fill("O").map(() => new Array(trees[0].length).fill("O"));
let visibleLeft = 0;

checkSides(trees);
trees = transpose(trees);
visibleArr = transpose(visibleArr);
checkSides(trees.map(line => line.join("")));



function checkSides(trees) {
    trees.forEach((tree, index) => {
        checkLeftSide(tree, index);
        checkRightSide(tree, index);
    });
}


// transpose array
function transpose(a) {
    return Object.keys(a[0]).map(function (c) {
        return a.map(function (r) { return r[c]; });
    });
}



function checkLeftSide(tree, index) {
    tree = tree.split("").map(Number)
    tree.forEach((char, i) => {
        let [leftHalf, rightHalf] = splitOnPosition(tree, i + 1);
        let maxLeft = Math.max(...leftHalf);
        if (+char > maxLeft || leftHalf.length == 0) {
            visibleLeft++;
            visibleArr[index][i] = "X";
        }
    });
}

function checkRightSide(tree, index) {
    tree = tree.split("").map(Number)
    tree.forEach((char, i) => {
        let [leftHalf, rightHalf] = splitOnPosition(tree, i + 1);
        let maxRight = Math.max(...rightHalf);
        if (+char > maxRight || rightHalf.length == 0) {
            visibleArr[index][i] = "X";
        }
    });
}
let visible = visibleArr.reduce((acc, curr) => {
    return acc + curr.filter(char => char == "X").length;
}, 0);

console.log(visible);
