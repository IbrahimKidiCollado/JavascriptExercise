// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
	let contador = 0;
	for (let i of stack) if (i == card) contador++;
	return contador
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
	let contador = 0;
	for (let i of stack) {
		if (type) {
			if (i % 2 == 0) contador++;
		} else {
			if (i % 2 !== 0) contador++;
		}
	}
	return contador;
}
