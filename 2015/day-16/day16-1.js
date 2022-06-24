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



Object.entries(obj).forEach(([sue, value]) => {

    let firstN = Object.keys(value)[0];
    let firstV = value[firstN];
    let secondN = Object.keys(value)[1];
    let secondV = value[secondN];
    let thirdN = Object.keys(value)[2];
    let thirdV = value[thirdN];
    
    if(resObj[firstN] === firstV && resObj[secondN] === secondV && resObj[thirdN] === thirdV) {
        console.log(sue);
    }
});


