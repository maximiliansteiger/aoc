<<<<<<< HEAD
const { input } = require('./readData');

=======
const { input } = require("./readData");

let arr = input.split("\r\n");

let cords = [];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    let currCords = [];
    if (arr[i][j] == "*") {
      if (
        i - 1 >= 0 &&
        j - 1 >= 0 &&
        i + 1 < arr.length &&
        j + 1 < arr[i].length
      ) {
        if (!isNaN(arr[i - 1][j - 1])) {
          currCords.push([i - 1, j - 1]);
        }
        if (!isNaN(arr[i - 1][j])) {
          currCords.push([i - 1, j]);
        }
        if (!isNaN(arr[i - 1][j + 1])) {
          currCords.push([i - 1, j + 1]);
        }
        if (!isNaN(arr[i][j - 1])) {
          currCords.push([i, j - 1]);
        }
        if (!isNaN(arr[i][j + 1])) {
          currCords.push([i, j + 1]);
        }
        if (!isNaN(arr[i + 1][j - 1])) {
          currCords.push([i + 1, j - 1]);
        }
        if (!isNaN(arr[i + 1][j])) {
          currCords.push([i + 1, j]);
        }
        if (!isNaN(arr[i + 1][j + 1])) {
          currCords.push([i + 1, j + 1]);
        }

        if (currCords.length != 0) {
          //check to get the whole numbers next to *

          for (let i = 0; i < 6; i++) {
            currCords.forEach((cord) => {
              currCords.push(...checkLeftAndRight(cord));
            });
          }
          currCords = currCords
            .map((el) => el.join(","))
            .filter((el, index, self) => self.indexOf(el) === index);

          let tempi = [];

          for (let i = 0; i < arr.length; i++) {
            let num = "";
            for (let j = 0; j <= arr[i].length; j++) {
              if (currCords.includes([i, j].join(","))) {
                num += arr[i][j];
              } else {
                if (num != "") {
                  tempi.push(num);
                }
                num = "";
              }
            }
          }
          console.log(tempi);

          if (tempi.length == 2) {
            sum += tempi.reduce((a,b) => a*b)
          }

          console.log(currCords);
        }
      }
    }
  }
}

// console.log(cords);

function checkLeftAndRight(cord) {
  let left = arr[cord[0]][cord[1] - 1];
  let right = arr[cord[0]][cord[1] + 1];

  let temp = [];

  if (left != undefined && !isNaN(left)) {
    temp.push([cord[0], cord[1] - 1]);
  }
  if (right != undefined && !isNaN(right)) {
    temp.push([cord[0], cord[1] + 1]);
  }
  return temp;
}

// let temp = [];

// //remove duplicates

// cords = cords
//   .map((el) => el.join(","))
//   .filter((el, index, self) => self.indexOf(el) === index);

for (let i = 0; i < arr.length; i++) {
  let num = "";
  for (let j = 0; j <= arr[i].length; j++) {
    if (cords.includes([i, j].join(","))) {
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

// console.log(temp.map(Number).length);
// console.log(temp.map(Number).reduce((a, b) => a + b, 0));

//loop through arr and check if char is *
//if it is check all neighbours for numbers
//if the neighbour is a number save the cords 
//now check the cords to get the whole number (for every neighbor of the *)
// save them in an array, if there are 2 neighbours multiply and add to sum
// log sum


console.log(sum);
>>>>>>> fffc6e903a434d8129c2fa8c720184845891e7ac
