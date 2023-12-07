const { input } = require("./readData");

<<<<<<< HEAD
//check surrounding chars and add the chars position that are next to a symbol to a list, then go through the whole list and check it the position in there

let arr = input.split("\r\n");

let onSymbolPositions = [];
let symbols = ["*", "#", "+", "$", "/", "@", "=", "%", "&"];

for (let y = 0; y < arr.length; y++) {
  // loop Y cords
  for (let x = 0; x < arr.length; x++) {
    // loop X cords
    if (symbols.includes(arr[y][x])) {
      //check the surrounding chars if they are numbers
      if (y > 0 && !isNaN(arr[y - 1][x])) {
        onSymbolPositions.push([y - 1, x]);
      }
      if (y < arr.length - 1 && !isNaN(arr[y + 1][x])) {
        onSymbolPositions.push([y + 1, x]);
      }
      if (x > 0 && !isNaN(arr[y][x - 1])) {
        onSymbolPositions.push([y, x - 1]);
      }
      if (x < arr.length - 1 && !isNaN(arr[y][x + 1])) {
        onSymbolPositions.push([y, x + 1]);
      }

      //also check the corners
      if (y > 0 && x > 0 && !isNaN(arr[y - 1][x - 1])) {
        onSymbolPositions.push([y - 1, x - 1]);
      }
      if (y > 0 && x < arr.length - 1 && !isNaN(arr[y - 1][x + 1])) {
        onSymbolPositions.push([y - 1, x + 1]);
      }
      if (y < arr.length - 1 && x > 0 && !isNaN(arr[y + 1][x - 1])) {
        onSymbolPositions.push([y + 1, x - 1]);
      }
      if (
        y < arr.length - 1 &&
        x < arr.length - 1 &&
        !isNaN(arr[y + 1][x + 1])
      ) {
        onSymbolPositions.push([y + 1, x + 1]);
      }
    }
  }
  console.log(onSymbolPositions.sort());
}

//check the chars next to the numbers in onSymbolPositions and add them to a list if they are numbers only check for left and right

for (let duration = 0; duration < 3; duration++) {
  let numbers = [];

  for (let i = 0; i < onSymbolPositions.length; i++) {
    let y = onSymbolPositions[i][0];
    let x = onSymbolPositions[i][1];

    if (x > 0 && !isNaN(arr[y][x - 1])) {
      //check if the array is already in the list
      if (!onSymbolPositions.includes([y, x - 1])) {
        numbers.push([y, x - 1]);
      }
    }
    if (x < arr.length - 1 && !isNaN(arr[y][x + 1])) {
      if (!onSymbolPositions.includes([y, x + 1])) {
        numbers.push([y, x + 1]);
      }
    }
  }
  onSymbolPositions.push(...numbers);
}

let finalPos = [
  ...new Set(onSymbolPositions.map((elem) => elem.join(",")).sort()),
];

for (let y = 0; y < arr.length; y++) {
  // loop Y cords
  for (let x = 0; x < arr.length; x++) {
    // loop X cords
    if (!finalPos.includes([y, x].join(","))) {
        //set the position to a .
        arr[y] = arr[y].split("");
        arr[y][x] = ".";
        arr[y] = arr[y].join("");

    }
  }
}

console.table(arr);

arr = arr.join("").split(".").filter(elem => elem.length > 0 );


console.log(arr.map(Number).reduce((a, b) => a + b, 0));
=======
let arr = input.split("\r\n");

// console.table(arr);

let symbols = ["+", "-", "/", "*", "&", "%", "$", "@", "#", "="];

let cords = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    let currChar = arr[i][j];

    if (symbols.includes(currChar)) {
      if (
        i - 1 >= 0 &&
        j - 1 >= 0 &&
        i + 1 < arr.length &&
        j + 1 < arr[i].length
      ) {
        if (!isNaN(arr[i - 1][j - 1])) {
          cords.push([i - 1, j - 1]);
        }
        if (!isNaN(arr[i - 1][j])) {
          cords.push([i - 1, j]);
        }
        if (!isNaN(arr[i - 1][j + 1])) {
          cords.push([i - 1, j + 1]);
        }
        if (!isNaN(arr[i][j - 1])) {
          cords.push([i, j - 1]);
        }
        if (!isNaN(arr[i][j + 1])) {
          cords.push([i, j + 1]);
        }
        if (!isNaN(arr[i + 1][j - 1])) {
          cords.push([i + 1, j - 1]);
        }
        if (!isNaN(arr[i + 1][j])) {
          cords.push([i + 1, j]);
        }
        if (!isNaN(arr[i + 1][j + 1])) {
          cords.push([i + 1, j + 1]);
        }
      }
    }
  }
}

// console.log(cords);

function checkLeftAndRight(cord) {
  let left = arr[cord[0]][cord[1] - 1];
  let right = arr[cord[0]][cord[1] + 1];

  if (left != undefined && !isNaN(left)) {
    cords.push([cord[0], cord[1] - 1]);
  }
  if (right != undefined && !isNaN(right)) {
    cords.push([cord[0], cord[1] + 1]);
  }
}

for (let i = 0; i < 6; i++) {
  cords.forEach((cord) => {
    checkLeftAndRight(cord);
  });
}

let temp = [];

//remove duplicates

cords = cords
  .map((el) => el.join(","))
    .filter((el, index, self) => self.indexOf(el) === index);


for (let i = 0; i < arr.length; i++) {
  let num = "";
  for (let j = 0; j <= arr[i].length; j++) {
    if (cords.includes([i,j].join(","))) {
      num += arr[i][j];
    } else {
      if (num != "") {
        temp.push(num);
      }
      num = "";
    }
  }
}

// console.log(temp);

// temp.forEach((elem) => {
//   console.log(elem);
// });

console.log(temp.map(Number).length);
console.log(temp.map(Number).reduce((a, b) => a + b, 0));
>>>>>>> fffc6e903a434d8129c2fa8c720184845891e7ac
