const { input } = require('./readData');



let s = 0
input.split('\n').forEach(e => {
    e = e.split('\t').map(Number);
    s += Math.max(...e) - Math.min(...e)
})
console.log(s)