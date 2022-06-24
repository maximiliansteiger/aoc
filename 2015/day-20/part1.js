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

function calcPresentsPartOne(n) {
	return 10 * factorizes(n).reduce((p, c) => p + c, 0);
}

var partOne = 1;
while (calcPresentsPartOne(partOne) <= 29000000) {
	partOne++;
}
console.log('Part One', partOne);

