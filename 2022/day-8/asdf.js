
function splitOnPosition(arr, position) {
    let leftHalf = arr.slice(0, position - 1);
    let rightHalf = arr.slice(position);
    return [leftHalf, rightHalf];
}

let visibleArr = new Array(trees.length).fill(0).map(() => new Array(trees[0].length).fill(0));

checkSides(trees);
// trees = transpose(trees);
// visibleArr = transpose(visibleArr);
// checkSides(trees.map(line => line.join("")));



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
    let treeRow = tree.split("").map(Number)
    for (let i = 0; i < treeRow.length; i++) {
        let [leftHalf, rightHalf] = splitOnPosition(treeRow, i + 1);
        leftHalf = leftHalf.reverse()
        for (let j = 0; j < leftHalf.length; j++) {
            visibleArr[index][i] *= leftHalf[j];
            if (leftHalf[j] > treeRow[index]) {
                break;
            }
        }

    }
    console.log("-----");



}

function checkRightSide(tree, index) {
    let treeRow = tree.split("").map(Number)
    for (let i = 0; i < treeRow.length; i++) {
        let [leftHalf, rightHalf] = splitOnPosition(treeRow, i + 1);
        for (let j = 0; j < rightHalf.length; j++) {
            visibleArr[index][i] *= rightHalf[j];
            if (rightHalf[j] > treeRow[index]) {
                break;
            }
        }

    }
    console.log("-----");

}




console.table(trees);
console.table(visibleArr);

// 3 0 3 7 3
// 2 5 5 1 2
// 6 5 3 3 2
// 3 3 5 4 9
// 3 5 3 9 0