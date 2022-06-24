function factorizes(n) {
	var factors = [1];
	for (var i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			factors.push(i);
			if (i * i !== n)
				factors.push(n / i);
		}
	}

	if (n > 1) {
		factors.push(n);
	}

	return factors.sort((a, b) => a - b);
}

function calcPresentsPartTwo(n) {
	return 11 * factorizes(n).reduce((p, c) => {
		return p + (n / c > 50 ? 0 : c);
	}, 0);
}


var partTwo = 1;
while (calcPresentsPartTwo(partTwo) <= 29000000) {
	partTwo++;
}
console.log('Part Two', partTwo);