/**
Enterprise (registry number NCC-1701) is not the only starship flying around! When it rendezvous with another starship, Mary needs to log the registry number of that starship.

Registry numbers start with the prefix "NCC-" and then use a number from 1000 to 9999 (both inclusive).

Implement the randomShipRegistryNumber() function that returns a random starship registry number.

randomShipRegistryNumber();
// => "NCC-1947"

Stuck? Reveal Hints
Opens in a modal
What's the use of a log if it doesn't include dates?

A stardate is a floating point number. The adventures of the Starship Enterprise from the first season of The Next Generation take place between the stardates 41000.0 and 42000.0. The "4" stands for the 24th century, the "1" for the first season.

Implement the function randomStardate that returns a floating point number between 41000.0 (inclusive) and 42000.0 (exclusive).

randomStardate();
// => 41458.15721310934

Stuck? Reveal Hints
Opens in a modal
The Starship Enterprise encounters many planets in its travels. Planets in the Star Trek universe are split into categories based on their properties. For example, Earth is a class M planet. All possible planetary classes are: D, H, J, K, L, M, N, R, T, and Y.

Implement the randomPlanetClass() function. It should return one of the planetary classes at random.

randomPlanetClass();
// => "K"
 */

// @ts-check

/**
 * Generates a random starship registry number.
 */

function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomShipRegistryNumber() {
	return `NCC-${randomInt(1000, 9999)}`;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
	return Math.random() * (42000 - 41000) + 41000
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
	const array = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y'];
	return array[randomInt(0, 9)];
}
