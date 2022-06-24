const { input } = require('./readData');
let arr = input.split("\n").map(char => char.trim());
let pairs = { "(": ")", "{": "}", "[": "]", "<": ">" };
let points = { ")": 3, "]": 57, "}": 1197, ">": 25137 };
let score = 0;

arr.forEach(line => {
    let stack = [];
    for (const char of line) {
        if (pairs[char]) {
            stack.push(char);
        } else if (char != pairs[stack.pop()]) {
            score += points[char];
            break;
        }
    }
});

console.log(score);
