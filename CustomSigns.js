/**
Introducción
En JavaScript, las cadenas de plantilla permiten incrustar expresiones en cadenas, también conocidas como interpolación de cadenas. Esta funcionalidad amplía la funcionalidad del objeto global String integrado.

Puede crear cadenas de plantilla en JavaScript ajustando el texto en comillas invertidas. No solo permiten que el texto incluya nuevas líneas y otros caracteres especiales, sino que también puede incrustar variables y otras expresiones.

const num1 = 1;
const num2 = 2;

`Adding ${num1} and ${num2} gives ${num1 + num2}.`;
// => Adding 1 and 2 gives 3.
En el ejemplo anterior, las comillas invertidas ('') - se utilizan para representar una cadena de plantilla. El ${...} es el marcador de posición que se utiliza para la sustitución. Los tipos que no son cadenas se convierten implícitamente en cadenas. Este tema se trata en el concepto de conversión de tipos. Se pueden usar todos los tipos de expresiones con cadenas de plantilla.

const track = 'JavaScript';

`This track on exercism.org is ${track.toUpperCase()}.`;
// => This track on exercism.org is JAVASCRIPT.
Cuando necesite tener cadenas formateadas en varias líneas:

`This is an example of using template
strings to accomplish multiple
lines`;
Con las capacidades de sustitución disponibles, también puede introducir lógica en el proceso para determinar cuál debe ser la cadena de salida.

Un ejemplo de esto es incrustar un operador ternario. Este operador es una forma abreviada de escribir una declaración if/else. La sintaxis es condition ? consequent-expression : alternative-expression . Si la condición es verdadera, se devolverá el operando en el lado izquierdo de los dos puntos. De lo contrario, el resultado de la expresión ternaria es el operando en el lado derecho de los dos puntos.

const grade = 95;

`You have ${grade > 90 ? 'passed' : 'failed'} the exam.`;
// => You have passed the exam.
Instrucciones
En este ejercicio, escribirá código para ayudar a una empresa de letreros a crear mensajes personalizados para sus letreros.

Tarea 1
Construye un letrero de ocasión
Implemente la función buildSign(occasion, name) que acepta una cadena como parámetro de ocasión y una cadena que contiene el nombre de alguien como parámetro de nombre. Los dos parámetros se incrustarán en una cadena de plantilla para generar el mensaje en el letrero.

buildSign('Birthday', 'Rob');
// => "Happy Birthday Rob!"

¿Estuco? Revelar pistas
Opens in a modal
Tarea 2
Construye un cartel de cumpleaños
Implemente la función buildBirthdaySign(age) que acepta una edad y, en función de la edad, determinará parte del mensaje en el letrero. Si la edad es de 50 años o más, el signo se referirá al usuario como maduro, de lo contrario se referirá a él como joven. A continuación se muestra el resultado exacto esperado:

buildBirthdaySign(50);
// => "Happy Birthday! What a mature fellow you are."

buildBirthdaySign(45);
// => "Happy Birthday! What a young fellow you are."

¿Estuco? Revelar pistas
Opens in a modal
Tarea 3
Construye un letrero de graduación
Implemente la función graduationFor(name, year) que toma un nombre como parámetro de cadena y un año como parámetro numérico y usa la interpolación de cadenas para crear una frase para un signo que usa una nueva línea para separar las dos líneas del mensaje.

graduationFor('Hannah', 2022);
// => "Congratulations Hannah!\nClass of 2022"

¿Estuco? Revelar pistas
Opens in a modal
Tarea 4
Calcular el costo de un letrero
Implemente la función costOf(sign, currency) que toma una cadena que contiene el contenido del signo y una cadena que representa la moneda. El letrero tiene un precio base de 20 en la moneda dada. Además, cada carta cuesta 2. (Los espacios en blanco se incluyen en el cálculo). La frase devuelta incluye el costo de crear el signo, escrito con dos dígitos después del punto decimal, seguido de la cadena de moneda.

costOf('Happy Birthday Rob!', 'dollars');
// => "Your sign costs 58.00 dollars."
*/

// @ts-check

// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Build a sign that includes both of the parameters.
 *
 * @param {string} occasion
 * @param {string} name
 *
 * @returns {string} template string combining both parameters
 */

export function buildSign(occasion, name) {
	return `Happy ${occasion} ${name}!`;
}

/**
 * Build a birthday sign that conditionally formats the return string.
 *
 * @param {number} age
 *
 * @returns {string} template string based on age
 */

export function buildBirthdaySign(age) {
	return `Happy Birthday! What a ${age >= 50 ? 'mature' : 'young'} fellow you are.`
}

/**
 * Build a graduation sign that includes multiple lines.
 *
 * @param {string} name
 * @param {number} year
 *
 * @returns {string} multi-line template string
 */

export function graduationFor(name, year) {
	const str = `Congratulations ${name}!
Class of ${year}`;
	return str;
}

/**
 * Determine cost based on each character of sign parameter that builds
 * the template string that includes the currency parameter.
 *
 * @param {string} sign
 * @param {string} currency
 *
 * @returns {string} cost to create the sign
 */

export function costOf(sign, currency) {
	return `Your sign costs ${(sign.length * 2) + 20}.00 ${currency}.`
}
