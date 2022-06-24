const {input} = require('./readData');
const inputArray = input.split("\n").map((line) => line.split("").map(Number));

let points = [];
let basis = [];

// find all points in inputArray where the numbers next to them are higher than the current number and add it to points
for (let i = 0; i < inputArray.length; i++) {
  basis.push([]);
  for (let j = 0; j < inputArray[i].length; j++) {
    let isLower = false;
    if (inputArray[i - 1] !== undefined) {
      if (inputArray[i - 1][j] <= inputArray[i][j]) {
        isLower = true;
      }
    }
    if (inputArray[i][j - 1] !== undefined) {
      if (inputArray[i][j - 1] <= inputArray[i][j]) {
        isLower = true;
      }
    }
    if (inputArray[i + 1] !== undefined) {
      if (inputArray[i + 1][j] <= inputArray[i][j]) {
        isLower = true;
      }
    }
    if (inputArray[i][j + 1] !== undefined) {
      if (inputArray[i][j + 1] <= inputArray[i][j]) {
        isLower = true;
      }
    }
    if (!isLower) {
      points.push([i, j]);
    }
    if (inputArray[i][j] === 9) {
      basis[i].push(false);
    } else {
      basis[i].push(true);
    }
  }
}

// console.table(basis);


// find all areas where the values in basis are true
let areas = [];
function findArea(point) {
  let area = [];
  let i = point[0];
  let j = point[1];
  if (basis[i][j] === true) {
    area.push(point);
    basis[i][j] = false;
    if (basis[i - 1] !== undefined) {
      if (basis[i - 1][j] === true) {
        area = area.concat(findArea([i - 1, j]));
      }
    }
    if (basis[i][j - 1] !== undefined) {
      if (basis[i][j - 1] === true) {
        area = area.concat(findArea([i, j - 1]));
      }
    }
    if (basis[i + 1] !== undefined) {
      if (basis[i + 1][j] === true) {
        area = area.concat(findArea([i + 1, j]));
      }
    }
    if (basis[i][j + 1] !== undefined) {
      if (basis[i][j + 1] === true) {
        area = area.concat(findArea([i, j + 1]));
      }
    }
  }
  return area;
}

let counters = [];

points.forEach((point) => {
    let area = findArea(point);
    counters.push(area.length);
});

// find the 3 highest values in counters, multiply them and print the result
let highest = 0;
let highest2 = 0;
let highest3 = 0;
counters.forEach((counter) => {
    if (counter > highest) {
        highest3 = highest2;
        highest2 = highest;
        highest = counter;
    } else if (counter > highest2) {
        highest3 = highest2;
        highest2 = counter;
    } else if (counter > highest3) {
        highest3 = counter;
    }
    }
);
console.log(highest * highest2 * highest3);