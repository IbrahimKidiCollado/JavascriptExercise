/* Cipher terminology
A cipher is an algorithm used to encrypt, or encode, a string. The unencrypted string is called the plaintext and the encrypted string is called the ciphertext. Converting plaintext to ciphertext is called encoding while the reverse is called decoding.

In a substitution cipher, each plaintext letter is replaced with a ciphertext letter which is computed with the help of a key. (Note, it is possible for replacement letter to be the same as the original letter.)

Encoding details
In this cipher, the key is a series of lowercase letters, such as "abcd". Each letter of the plaintext is shifted or rotated by a distance based on a corresponding letter in the key. An "a" in the key means a shift of 0 (that is, no shift). A "b" in the key means a shift of 1. A "c" in the key means a shift of 2, and so on.

The first letter of the plaintext uses the first letter of the key, the second letter of the plaintext uses the second letter of the key and so on. If you run out of letters in the key before you run out of letters in the plaintext, start over from the start of the key again.

If the key only contains one letter, such as "dddddd", then all letters of the plaintext are shifted by the same amount (three in this example), which would make this the same as a rotational cipher or shift cipher (sometimes called a Caesar cipher). For example, the plaintext "iamapandabear" would become "ldpdsdqgdehdu".

If the key only contains the letter "a" (one or more times), the shift distance is zero and the ciphertext is the same as the plaintext.

Usually the key is more complicated than that, though! If the key is "abcd" then letters of the plaintext would be shifted by a distance of 0, 1, 2, and 3. If the plaintext is "hello", we need 5 shifts so the key would wrap around, giving shift distances of 0, 1, 2, 3, and 0. Applying those shifts to the letters of "hello" we get "hfnoo".
 */
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