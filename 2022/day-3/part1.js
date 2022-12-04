const { input } = require('./readData');

let backpacks = input.split('\r\n')
let sameItems = [];

for (let i = 0; i < backpacks.length; i++) {
    let sameItemsInCompartment = [];
    let items = backpacks[i].split('');
    let compartment1 = onlyUnique(items.splice(0, backpacks[i].length / 2));
    let compartment2 = onlyUnique(items);
    compartment1.forEach((item) => {
        if (compartment2.includes(item)) {
            sameItemsInCompartment.push(item);
        }
    });
    sameItems.push(...onlyUnique(sameItemsInCompartment));
}

function getValueOfItems(items) {
    let value = 0;
    items.forEach((item) => {
        if (item === item.toUpperCase()) {
            value += item.charCodeAt(0) - 38;
        } else {
            value += item.charCodeAt(0) - 96;
        }
    });
    return value;
}

function onlyUnique(arr){
    return Array.from(new Set(arr));
}

console.log(getValueOfItems(sameItems));