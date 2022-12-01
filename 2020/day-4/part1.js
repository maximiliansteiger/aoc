const { input } = require('./readData');

let passports = input.split('\r\n\r\n');

function checkIfValid(passport){
    let valid = true;
    let requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
    requiredFields.forEach((field) => {
        if(!passport.includes(field)){
            valid = false;
        }
    });
    return valid;
}
console.log(passports.filter(ps => checkIfValid(ps)).length);