const { input } = require('./readData');

let arr = input.split("\r\n")
let groupArray = []

let str = "";
for (let i = 0; i <= arr.length; i++) {
    if (arr[i]?.length == 0 || arr[i] == undefined) {
        groupArray.push(str)
        str = "";
    }
    str += arr[i];
}

//check for same letters in answers of people of a group
function checkForSameLettersInString(str1,str2){

}


groupArray = groupArray.map(answers => new Set(answers.split("")).size).reduce((a,b) => a+b)

console.log(groupArray);