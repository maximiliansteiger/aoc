const {
    input
} = require('./readData');

let arr = input.split('\r\n');

// console.log(arr);

let obj = {};


// Sue 4: perfumes: 2, vizslas: 0, cars: 6

arr.forEach(element => {
    let information = element.split(' ');
    // console.log(information);
    let num = information[1].slice(0, -1);
    let firstName = information[2].slice(0, -1);
    let firstValue = information[3].slice(0, -1);

    let secondName = information[4].slice(0, -1);
    let secondValue = information[5].slice(0, -1);

    let thirdName = information[6].slice(0, -1);
    let thirdValue = information[7];

    obj[num] = {
        [firstName]: +firstValue,
        [secondName]: +secondValue,
        [thirdName]: +thirdValue
    }
});



let resObj = {
    children: 3,
    cats: 7,
    samoyeds: 2,
    pomeranians: 3,
    akitas: 0,
    vizslas: 0,
    goldfish: 5,
    trees: 3,
    cars: 2,
    perfumes: 1
};

let sueArray = Object.keys(obj);
sueArray = sueArray.map(Number);

Object.entries(obj).forEach(([sue, value]) => {

    let firstN = Object.keys(value)[0];
    let firstV = value[firstN];
    let secondN = Object.keys(value)[1];
    let secondV = value[secondN];
    let thirdN = Object.keys(value)[2];
    let thirdV = value[thirdN];

    
    //cats and trees
    removeSue((firstN === "cats" || firstN === "trees") && resObj[firstN] <= firstV, sue);
    removeSue((secondN === "cats" || secondN === "trees") && resObj[secondN] <= secondV,sue);
    removeSue((thirdN === "cats" || thirdN === "trees") && resObj[thirdN] <= thirdV,sue);

    //pomeranians and goldfish
    removeSue(firstN === "pomeranians" && resObj[firstN] >= firstV,sue);
    removeSue(secondN === "pomeranians" && resObj[secondN] >= secondV,sue);
    removeSue(thirdN === "pomeranians" && resObj[thirdN] >= thirdV,sue);
    
    if(firstN != "cats" && firstN != "trees" && firstN != "pomeranians") {
        removeSue(resObj[firstN] === firstV,sue);
    }

});


function removeSue(condition, sue) {
    if (condition) {
        //get index of sue
        let index = sueArray.indexOf(Number(sue));
        //remove sue from array
        sueArray.splice(index, 1);
    }
}

console.log(sueArray);