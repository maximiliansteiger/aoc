const { input } = require('./readData');

let arr = input.split('\r\n\r\n');
let numberarr = arr[0].split(',').map(Number);
let games = arr.splice(1).map(game => game.split('\r\n').map(value => value.split(' ').filter(value => value !== '').map(Number)));

games.forEach(game => {
    game.forEach(value => { value.push(0); })
    game.push([0, 0, 0, 0, 0]);
});

for (let numindex = 0; numindex < numberarr.length; numindex++) {
    //loop through all games played
    for (let i = 0; i < games.length; i++) {
        //loop through one game at a time
        for (let j = 0; j < games[i].length - 1; j++) {
            //loop through all horizontal lines in the one game
            for (let k = 0; k < games[i][j].length - 1; k++) {

                if (games[i][j][k] === numberarr[numindex]) {
                    let horizcnt = ++games[i][j][5];
                    let verticnt = ++games[i][5][k];

                    if (horizcnt == 5 || verticnt == 5) {
                        culcSolution(numindex, games[i], numberarr[numindex]);
                        return;
                    }
                }
            }
        }
    }
}

function culcSolution(indexOfNumber, game, finalnumber) {
    let numbersNow = numberarr.slice(0, indexOfNumber + 1);
    let unmarked = 0;

    for (let i = 0; i < game.length - 1; i++) {
        for (let j = 0; j < game[i].length - 1; j++) {
            unmarked += (numbersNow.includes(game[i][j])) ? 0 : game[i][j]
        }
    }
    console.log(unmarked * finalnumber);
}

