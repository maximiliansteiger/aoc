const { input } = require('./readData');

let backpacks = input.split('\r\n')

let sameItems = [];
for (let i = 0; i < backpacks.length;) {
    let elf1 = onlyUnique(backpacks[i].split(''));
    let elf2 = onlyUnique(backpacks[i + 1].split(''));
    let elf3 = onlyUnique(backpacks[i + 2].split(''));
    let allElves = [...[...elf1, ...elf2, ...elf3]].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {});
    let sameItemsTemp = Object.keys(allElves).filter(key => allElves[key] === 3);
    sameItems.push(...sameItemsTemp);
    i += 3;
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

function onlyUnique(arr) {
    return Array.from(new Set(arr));
}

console.log(getValueOfItems(sameItems));
