/* Instructions
Your task is to figure out if a sentence is a pangram.

A pangram is a sentence using every letter of the alphabet at least once. It is case insensitive, so it doesn't matter if a letter is lower-case (e.g. k) or upper-case (e.g. K).

For this exercise, a sentence is a pangram if it contains each of the 26 letters in the English alphabet. */

export const isPangram = (phrase) => {
	const a = 'abcdefghijklmnopqrstuvwxyz'.split('');
	const alphabet = {};

	if (phrase === '') return false;

	a.forEach(letra => {
		alphabet[letra] = false;
	})

	for (let i = 0; i < phrase.length; i++) {
		let letter = phrase[i].toLowerCase();
		if (!alphabet.hasOwnProperty(letter) && /[a-z]/.test(letter)) return false;
		else {
			if (/[a-z]/.test(letter)) alphabet[letter] = true;
		}
	}

	if (Object.values(alphabet).includes(false)) return false;

	return true;
};