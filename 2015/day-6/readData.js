const path = require('path');
const fs = require('fs');

const inp = fs
	.readFileSync(path.join(__dirname, 'data.txt'), 'utf8')
	.toString()

module.exports = {
	inp,
};