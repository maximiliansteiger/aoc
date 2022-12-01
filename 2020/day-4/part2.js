const { input } = require('./readData');

let passports = input.split('\r\n\r\n');

passports = passports.map(passport =>
    new Map(passport.split(/\s+/).map(field => field.split(':')))
)
function checkIfValid(passport) {
    let valid = true;
    let requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
    requiredFields.forEach((field) => {
        if (!passport.has(field)) {
            valid = false;
        } else {
            let value = passport.get(field);
            switch (field) {
                case 'byr':
                    if (value < 1920 || value > 2002) {
                        valid = false;
                    }
                    break;
                case 'iyr':
                    if (value < 2010 || value > 2020) {
                        valid = false;
                    }
                    break;
                case 'eyr':
                    if (value < 2020 || value > 2030) {
                        valid = false;
                    }
                    break;
                case 'hgt':
                    if (value.endsWith('cm')) {
                        value = value.replace('cm', '');
                        if (value < 150 || value > 193) {
                            valid = false;
                        }
                    } else if (value.endsWith('in')) {
                        value = value.replace('in', '');
                        if (value < 59 || value > 76) {
                            valid = false;
                        }
                    } else {
                        valid = false;
                    }
                    break;
                case 'hcl':
                    if (!value.match(/^#[0-9a-f]{6}$/)) {
                        valid = false;
                    }
                    break;
                case 'ecl':
                    if (!['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value)) {
                        valid = false;
                    }
                    break;
                case 'pid':
                    if (!value.match(/^[0-9]{9}$/)) {
                        valid = false;
                    }
                    break;
            }
        }
    });
    return valid;
}
console.log(passports.filter(ps => checkIfValid(ps)).length);