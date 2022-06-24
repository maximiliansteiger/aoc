const { input } = require('./readData.js');

console.log(input);
let lightsOn = 0;
let arr = [];
input.split('\r\n').forEach(e => {
    let tempArr = e.split(' ');
    if(tempArr[0] === 'toggle') {
        arr.push([tempArr[0],tempArr[1].split(',')[0],tempArr[1].split(',')[1],tempArr[3].split(',')[0],tempArr[3].split(',')[1]]);
    }else{
        arr.push([tempArr[1],tempArr[2].split(',')[0],tempArr[2].split(',')[1],tempArr[4].split(',')[0],tempArr[4].split(',')[1]]);
    }
}
);

// 0,0 999,999

// (999 + 1) - 0
// (999 + 1) - 0
// 1000 * 1000 1M lights on


// (500 + 1) - 499
// (500 + 1) - 499
// 


// if on += lightOn
// if off -= lightOn
// if







console.log(arr);