/* Implement basic list operations.

In functional languages list operations like length, map, and reduce are very common. Implement a series of basic list operations, without using existing functions.

The precise number and names of the operations to be implemented will be track dependent to avoid conflicts with existing names, but the general operations you will implement include:

append (given two lists, add all items in the second list to the end of the first list);
concatenate (given a series of lists, combine all items in all lists into one flattened list);
filter (given a predicate and a list, return the list of all items for which predicate(item) is True);
length (given a list, return the total number of items within it);
map (given a function and a list, return the list of the results of applying function(item) on all items);
foldl (given a function, a list, and initial accumulator, fold (reduce) each item into the accumulator from the left);
foldr (given a function, a list, and an initial accumulator, fold (reduce) each item into the accumulator from the right);
reverse (given a list, return a list with all the original items, but in reversed order).
Note, the ordering in which arguments are passed to the fold functions (foldl, foldr) is significant.

Using core language features to build and deconstruct arrays via destructuring, and using the array literal [] are allowed, but no functions from the Array.prototype should be used.
 */
export class List {
	constructor(list = []) {
		this.values = list;
	}

	append(otherList) {
		const newValues = [];

		// Copiar valores actuales
		for (let i = 0; i < this.values.length; i++) {
			newValues[newValues.length] = this.values[i];
		}

		// Agregar valores del otherList
		for (let i = 0; i < otherList.values.length; i++) {
			newValues[newValues.length] = otherList.values[i];
		}

		return new List(newValues);
	}

	concat(listOfLists) {
		let newValues = [];

		// Copiar valores actuales
		for (let i = 0; i < this.values.length; i++) {
			newValues[newValues.length] = this.values[i];
		}

		// Agregar valores de cada lista en listOfLists
		for (let i = 0; i < listOfLists.values.length; i++) {
			const currentList = listOfLists.values[i];
			for (let j = 0; j < currentList.values.length; j++) {
				newValues[newValues.length] = currentList.values[j];
			}
		}

		return new List(newValues);
	}

	filter(func) {
		const newValues = [];
		for (let i = 0; i < this.values.length; i++) {
			if (func(this.values[i])) {
				newValues[newValues.length] = this.values[i];
			}
		}
		return new List(newValues);
	}

	length() {
		let count = 0;
		for (let i = 0; i < this.values.length; i++) {
			count++;
		}
		return count;
	}

	map(func) {
		const newValues = [];
		for (let i = 0; i < this.values.length; i++) {
			newValues[newValues.length] = func(this.values[i]);
		}
		return new List(newValues);
	}

	foldl(func, initial) {
		let accumulator = initial;
		for (let i = 0; i < this.values.length; i++) {
			accumulator = func(accumulator, this.values[i]);
		}
		return accumulator;
	}

	foldr(func, initial) {
		let accumulator = initial;
		for (let i = this.values.length - 1; i >= 0; i--) {
			accumulator = func(accumulator, this.values[i]);
		}
		return accumulator;
	}

	reverse() {
		const newValues = [];
		for (let i = this.values.length - 1; i >= 0; i--) {
			newValues[newValues.length] = this.values[i];
		}
		return new List(newValues);
	}
}