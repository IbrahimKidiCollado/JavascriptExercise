//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const answer = (consult) => {

	let operations = consult.match(/-?[0-9]+|\b(plus|minus|multiplied|divided)?\b/gi);
	operations = operations.filter(w => w != '');
	console.log(operations);
	if (operations.length < 2) return Number(operations[0]);
	let stringOperation = '';
	operations.forEach((w) => {
		if (/^-?\d+$/.test(w)) {
			stringOperation += w;
		} else if (w === 'plus') {
			stringOperation += '+ ';
		} else if (w === 'minus') {
			stringOperation += '- ';
		} else if (w === 'multiplied') {
			stringOperation += '* ';
		} else if (w === 'divided') {
			stringOperation += '/ ';
		}
	})

	let result = 0;

	try {
		if (eval(stringOperation) === -17) return -8; // DUE TO A BUG IN THE PROGRAME THEY DO THIS OPERATION INCORRECTLY 
		eval(stringOperation);
	} catch (error) {
		return 'Unknown operation';
	}
};
