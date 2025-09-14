export class Cipher {
	constructor(key) {
		if (key === undefined) this.createKey();
		else this.key = key;
	}

	random(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	createKey() {
		let key = '';
		let latinAlphabet = 'abcdefghijklmnopqrstuvwxyz';
		for (let i = 0; i < 100; i++) {
			key += latinAlphabet[this.random(0, latinAlphabet.length - 1)]
		}
		this.key = key;
		console.log(this.key);
	}

	encode(string) {
		let latinAlphabet = 'abcdefghijklmnopqrstuvwxyz';
		const arrayAlphabet = latinAlphabet.split('');

		let countLetterKey = 0;
		let maxLengthKey = this.key.length;
		let newString = '';
		for (let i = 0; i < string.length; i++) {

			const letterKey = this.key[i % this.key.length];
			let posLetterKey = arrayAlphabet.indexOf(letterKey); //14 
			let posLetterString = arrayAlphabet.indexOf(string[i]); //18 = s

			let maxIndex = arrayAlphabet.length;

			if (posLetterKey + posLetterString >= maxIndex) newString += arrayAlphabet[(posLetterKey + posLetterString) - maxIndex];
			else newString += arrayAlphabet[posLetterKey + posLetterString];

			countLetterKey++;
		}

		return newString;
	}

	decode(string) {
		const latinAlphabet = 'abcdefghijklmnopqrstuvwxyz';
		const arrayAlphabet = latinAlphabet.split('');

		//aaaaaaaaaa = string
		//ioewytwituqe = key

		let newString = '';
		let countKey = 0;
		const maxCountKey = this.key.length;

		for (let i = 0; i < string.length; i++) {

			const letterKey = this.key[i % this.key.length];
			let posActualKey = arrayAlphabet.indexOf(letterKey);
			let posActualLetter = arrayAlphabet.indexOf(string[i]);

			if (posActualLetter - posActualKey < 0) newString += arrayAlphabet[(posActualLetter - posActualKey) + 26];
			else newString += arrayAlphabet[posActualLetter - posActualKey];

			countKey++;
		}
		return newString
	}

	get _key() {
		return this.key;
	}

	set _key(newKey) {
		this.key = newKey;
	}
}