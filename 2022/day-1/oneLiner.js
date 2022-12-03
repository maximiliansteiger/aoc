let {input} = require('./readData')
console.log(Math.max(...input.replaceAll("\r\n", " ").split("  ").map(elem => elem.split(" ").map(Number)).map(elem => elem.reduce((a, b) => a + b, 0))));