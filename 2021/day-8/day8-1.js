console.log(require('./readData')
    .input
    .split('\r\n')
    .map(segment => segment
        .split("|")[1]
        .split(" ")
        .filter(e =>
            e.length == 2 ||
            e.length == 4 ||
            e.length == 3 ||
            e.length == 7
        ).length
    ).reduce((a, b) => a + b));