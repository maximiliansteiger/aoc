const { input } = require('./readData');

let arr = input.split('\r\n').map(str => +str[str.length - 1]);

let i = 1;
let player1 = true;

let player1Field = arr[0];
let player2Field = arr[1];


console.log(player1Field, player2Field);

while (i < 100) {
    i += 3;

    if (player1) {
        player1Field = addNumbersToPlayer(player1Field, i - 2);
        player1Field = addNumbersToPlayer(player1Field, i - 1);
        player1Field = addNumbersToPlayer(player1Field, i);
    } else {
        player2Field = addNumbersToPlayer(player2Field, i - 2);
        player2Field = addNumbersToPlayer(player2Field, i - 1);
        player2Field = addNumbersToPlayer(player2Field, i);
    }
    player1 = !player1;

    console.log(player1Field, player2Field);
}

//check if player1Field is higher than 10 else add 1
function addNumbersToPlayer(player, i) {
    if (player > 10) {
        player += i;
    } else {
        player += 1;
    }
    return player;
}