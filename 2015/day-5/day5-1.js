const { input } = require('./readData.js');
let words = input.split('\r\n');

function nice(str) {
    var vowels = str.match(/[aeiou]/g);
    var bad = str.match(/ab|cd|pq|xy/);
    var doubles = str.match(/([a-z])\1/);
    return (vowels != undefined && vowels.length >= 3)
        && (bad == undefined || bad.length == 0)
        && (doubles != undefined && doubles.length > 0)
}
console.log(words.filter(nice).length);