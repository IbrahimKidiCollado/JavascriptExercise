/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
	let price = 0;
	switch (pizza) {
		case 'Margherita':
			price = 7;
			break;
		case 'Caprese':
			price = 9;
			break;
		case 'Formaggio':
			price = 10;
			break;
		default:
			break;
	}

	for (let i of extras) {
		if (i === 'ExtraSauce') price += 1;
		if (i === 'ExtraToppings') price += 2;
	}
	return price;
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
	let price = 0;

	const pizzas = {
		Margherita: 7,
		Caprese: 9,
		Formaggio: 10
	};

	const extras = {
		ExtraSauce: 1,
		ExtraToppings: 2
	};

	for (let order of pizzaOrders) {
		price += pizzas[order.pizza];

		for (let extra of order.extras) {
			price += extras[extra];
		}
	}

	return price;
}