/* La primera banda de un resistor tiene un esquema de codificación simple: cada color corresponde a un solo número. Por ejemplo, si imprimen una banda marrón (valor 1) seguida de una banda verde (valor 5), se traduciría al número 15.

En esta práctica vas a crear un programa útil para que no tengas que recordar los valores de las bandas. El programa tomará nombres de colores como entrada y generará un número de dos dígitos, incluso si la entrada tiene más de dos colores!

Los colores de las bandas se codifican de la siguiente manera:

negro: 0
marrón: 1
red: 2
naranja: 3
amarillo: 4
verde: 5
azul: 6
violeta: 7
gris: 8
blanco: 9
De acuerdo con el ejemplo anterior: brown-green debería devolver 15, y brown-green-violet también debería devolver 15, ignorando el tercer color. */

// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.

const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export const decodedValue = (colorSecuence) => {
	const result = `${colors.indexOf(colorSecuence[0])}${colors.indexOf(colorSecuence[1])}`;
	return Number(result);
};