const { input } = require('./readData');

let games = input.split("\r\n")
let sum = 0;

let allowedArray = {
    "red":12,
    "green":13,
    "blue":14
}
for(let game of games){
    let isOK = true
    let gameID = +game.split(":")[0].replace(/\D/g,'')
    let rest = game.split(":")[1].split(";")

    for(let line of rest){
        let amount = line.split(",").map(elem => +elem.split(" ")[1])
        let color =  line.split(",").map(elem => elem.split(" ")[2])
        for(let i = 0; i<amount.length;i++){
            if(amount[i] > allowedArray[color[i]]){
                isOK = false
            }
        }
    }
    if(isOK){
        sum += gameID
    }
}

console.log(sum)