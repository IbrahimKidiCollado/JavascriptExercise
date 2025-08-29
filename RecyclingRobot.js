/**
You have been hired by a recycling center. Due to lack of space, all the products are put on the same conveyor belt, but this has lead to different materials mixing together, making them unusable. To fix this, you have been tasked with making functions to identify the type of a product.


Stuck? Reveal Hints
Opens in a modal
Implement the isBoolean function, that checks if a value is a boolean.

isBoolean(true);
// => true

isBoolean(null);
// => false

Stuck? Reveal Hints
Opens in a modal
Implement the isNumber function, that checks if a value is a finite number or bigint, ie. not NaN or Infinity.

Sometimes, the device for reading IDs fails and reads a non-numeric value as NaN (Not a Number) or Infinity. Your function should be able to correctly handle this as well.

isNumber(42);
// => true

isNumber('Hello, World!');
// => false

isNumber(42n);
// => true

isNumber(NaN);
// => false

Stuck? Reveal Hints
Opens in a modal
Implement the isObject function, that should check if the value is an object. On the conveyor, null is nothing and not considered an object.

isObject({ greeting: 'Hello' });
// => true

isObject(25n);
// => false

Stuck? Reveal Hints
Opens in a modal
Implement the isNumericString function, that should check if the value is a string that only consists of digits or a minus followed by digits indicating a negative number. Only integers should be considered, decimals are not considered numeric for this check of the recycling robot.

isNumericString(42);
// => false

isNumericString('42');
// => true

isNumericString('Hi!');
// => false

Stuck? Reveal Hints
Opens in a modal
Implement the isElectronic function, that checks if an object is an instance of the provided ElectronicDevice class or one of its child classes.

class Duck {
  //...
}

class WashingMachine extends ElectronicDevice {
  //...
}

isElectronic(new Duck());
// => false

isElectronic(new WashingMachine());
// => true

Stuck? Reveal Hints
Opens in a modal
Implement the isNonEmptyArray function, that checks if a value is a non-empty array.

isNonEmptyArray([1, 2, 3]);
// => true

isNonEmptyArray([]);
// => false

Stuck? Reveal Hints
Opens in a modal
Implement the isEmptyArray function, that checks if a value is an empty array.

isEmptyArray([1, 2, 3]);
// => false

isEmptyArray([]);
// => true

Stuck? Reveal Hints
Opens in a modal
Implement the hasType function, that checks whether an object has a type property or method.

class Keyboard(){
  type(){
	// ...
  }
}
hasType({ type:"car", color:"red" })
// => true

hasType({ color:"green" })
// => false

hasType(new Keyboard())
// => true

Stuck? Reveal Hints
Opens in a modal
Implement the assertHasId function, that will throw an Error if an object is missing the id property.

If an object does have the id property, it should not return anything.

assertHasId({ id: 42, color: 'red' });
// => undefined

assertHasId({ color: 'green' });
// Error: "Object is missing the 'id' property"

Stuck? Reveal Hints
Opens in a modal
Implement the hasIdProperty function, that checks whether an object has an id property.

class SimpleData {
  constructor() {
	this.number = '42';
	this.id = 'BC269327FE1D9B95';
  }
}

class StealingData extends SimpleData {}

class MethodData {
  constructor() {
	this.number = '42';
	this._id = 'BC269327FE1D9B95';
  }

  get id() {
	return this._id;
  }
}

hasIdProperty(new SimpleData());
// => true

hasIdProperty(new MethodData());
// => false

hasIdProperty(new StealingData());
// => false

Stuck? Reveal Hints
Opens in a modal
Implement the hasDefinedType function, that checks if an object has a type property that is not undefined.

hasDefinedType({ type: undefined, color: 'red' });
// => false

hasDefinedType({ type: 'car', color: 'green' });
// => true
 */

// @ts-nocheck
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

import { ElectronicDevice } from './lib.js';

/**
 * Checks if input is a boolean.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a boolean
 */
export function isBoolean(value) {
	return typeof value === 'boolean' ? true : false;
}

/**
 * Checks if input is a finite number or bigint.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a finite number or bigint
 */
export function isNumber(value) {
	if (typeof value === 'bigint') return true;
	if (typeof value !== 'number') return false;
	return Number.isFinite(value);
}

/**
 * Checks if a value is an object.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is an object.
 */
export function isObject(value) {
	if (typeof value === 'object') {
		if (value === null) return false;
		return true;
	}
	return false;
}

/**
 * Checks if a value is a numeric string.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a numeric string.
 */
export function isNumericString(value) {
	if (typeof value !== "string") return false;

	if (!/^-?\d+$/.test(value)) return false;

	const num = Number(value);
	return !Number.isNaN(num);
}

/**
 * Checks if an object is an instance of the `ElectronicDevice` class or one of its children.
 *
 * @param {object} object
 * @returns {boolean} whether the object is an instance of the `ElectronicDevice` class or one of its children.
 */
export function isElectronic(object) {
	return object instanceof ElectronicDevice;
}

/**
 * Checks if a value is a non empty array.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is a non empty array.
 */
export function isNonEmptyArray(value) {
	if (Array.isArray(value)) {
		if (value.length === 0) return false;
		return true;
	}
	return false
}


/**
 * Checks if a value is an empty array.
 *
 * @param {unknown} value
 * @returns {boolean} whether the input is an empty array.
 */
export function isEmptyArray(value) {
	if (Array.isArray(value)) {
		if (value.length === 0) return true;
		return false;
	}
	return false;
}

/**
 * Checks if a value has a "type" property or method.
 *
 * @param {object} object
 * @returns {boolean} whether the input has a "type" property or method.
 */
export function hasType(object) {
	return 'type' in object;
}

/**
 * Throws an error if an object is missing an "id" property or method.
 *
 * @param {object} object
 * @returns {never|void} undefined if the input has an "id" property or method, otherwise throws an error.
 */
export function assertHasId(object) {
	if ('id' in object) return undefined
	else throw new Error("Object is missing the 'id' property")
}

/**
 * Checks if a value has an "id" property.
 *
 * @param {object} object
 * @returns {boolean} whether the input has an "id" property.
 */
export function hasIdProperty(object) {
	if (Object.hasOwn(object, 'id')) return true;
	return false;
}

/**
 * Checks if a value has a defined "type" property.
 *
 * @param {object} object
 * @returns {boolean} whether the input has a defined "type" property.
 */
export function hasDefinedType(object) {
	console.log(object);
	if ('type' in object) {
		if (!Object.hasOwn(object, 'type')) return false;
		if (object.type === undefined) return false;
		return true;
	}
	return false;
}
