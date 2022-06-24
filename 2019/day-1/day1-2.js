const { input } = require('./readData');

let text = "A(B){C};:a.b*!c??!1<>2@#3"
let result = text.replace(/[^a-zA-Z]/g, '')
console.log(result);