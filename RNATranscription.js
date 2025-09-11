/* Instructions
Your task is to determine the RNA complement of a given DNA sequence.

Both DNA and RNA strands are a sequence of nucleotides.

The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G), and thymine (T).

The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G), and uracil (U).

Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:

G -> C
C -> G
T -> A
A -> U
 */

export const toRna = (strand) => {
	if (strand === '') return '';

	const array = strand.split('');

	let result = '';
	for (let i of array) {
		switch (i) {
			case 'A': result += 'U';
				break;
			case 'C': result += 'G';
				break;
			case 'G': result += 'C';
				break;
			case 'T': result += 'A';
				break;
			default: break;
		};
	}

	return result;
};
