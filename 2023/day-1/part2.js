const { exit } = require("process");
const { input } = require("./readData");

let arr = input.split("\r\n");

let numWords = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

let finalArr = arr.map((line) => {
  let tempArr = [];
  let tempString = "";

  for (let i = 0; i < line.length; i++) {
    if (!isNaN(Number(line[i]))) {
      tempArr.push(line[i]);
      tempString = "";
    } else {
      tempString += line[i];
      for (let numWord of numWords) {
        if (tempString.includes(numWord)) {
          tempArr.push(numWords.indexOf(numWord) + 1);
          tempString = tempString[tempString.length - 1];
        }
      }
    }
  }
  return +(tempArr[0] +""+ tempArr[tempArr.length-1])
});

console.log(finalArr.reduce((a,b)=> a+b));
