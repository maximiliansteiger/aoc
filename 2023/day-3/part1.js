const { input } = require("./readData");

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
