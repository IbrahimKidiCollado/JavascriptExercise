/**
Introducción
En JavaScript, la clase Array tiene muchos métodos integrados eficaces para transformar matrices. Estos métodos hacen que sea mucho más fácil convertir una matriz en otra de lo que sería de otra manera usando un bucle for simple o una manipulación más directa.

Algunos métodos son puros, lo que significa que no modifican la matriz original. En su lugar, devuelven uno nuevo. Sin embargo, otros métodos manipulan la matriz a la que se llama y no devuelven la matriz modificada.

A continuación se presentan algunos de los métodos más utilizados para transformar matrices. Se puede encontrar una lista completa de los métodos disponibles en la documentación de MDN.

Mapa (puro)
Cree una nueva matriz transformando cada elemento de acuerdo con una función pasada como argumento. Estas funciones de devolución de llamada a menudo se escriben como funciones de flecha.

let arr = [1, 2, 3, 4];

const newArr = arr.map((value) => value - 1);
console.log(newArr);
// => [0, 1, 2, 3]
console.log(arr);
// => [1, 2, 3, 4]
Vale la pena señalar que la matriz resultante siempre tendrá la misma longitud que la original.

Filtro (puro)
Crea una matriz filtrando la actual, dada una función de filtrado (que devuelve true si el elemento debe mantenerse y false si debe eliminarse).

let arr = [1, 2, 3, 4];

arr.filter((value) => value % 2 === 0);
// => [2, 4]
reducir (puro)
Reduce la matriz a un solo valor mediante una función que toma un acumulador y el elemento actual de la matriz como parámetros. Esta función indica cómo se debe combinar el elemento actual en el acumulador y devuelve el acumulador que se utilizará en la siguiente iteración.

let arr = [1, 2, 3, 4];

// Get the sum of elements
arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// => 10

// Classify the numbers by whether they are odd or not
arr.reduce(
  (accumulator, currentValue) => {
    if (currentValue % 2 === 0) {
      accumulator.even.push(currentValue);
    } else {
      accumulator.odd.push(currentValue);
    }

    return accumulator;
  },
  { even: [], odd: [] },
);
// => { even: [2, 4], odd: [1, 3] }
Marcha atrás
Invierte los elementos de una matriz.

const arr = [1, 2, 3, 4];

arr.reverse();
// => [4, 3, 2, 1]
Este método modifica la matriz en la que se llama.

rebanada (pura)
Dado un índice de inicio y un índice final, crea una submatriz a partir de la matriz pasada como parámetro.

El elemento en el índice final no se incluirá. Además, todos los parámetros son opcionales: el índice inicial predeterminado es 0 y el índice final predeterminado es la longitud de la matriz.

const arr = [1, 2, 3, 4];

arr.slice(1, 2); // [2]
arr.slice(1); // [2, 3, 4]
// You can also use negative numbers, that represent the indexes
// starting from the end of the array
arr.slice(-2); // [3, 4]
empalme
Quita, reemplaza y/o agrega nuevos elementos de una matriz.

Toma los siguientes parámetros:

el índice del elemento donde comenzar a modificar la matriz
el número de elementos a eliminar
los elementos a insertar en la matriz (opcional)
splice devuelve los elementos que se han eliminado.

const arr = ['1', '2', '5', '6'];

// Insert an element at index 2
arr.splice(2, 0, '3');
console.log(arr);
// => ['1', '2', '3', '5', '6']

// Remove 2 elements, starting at index 3 and insert 2 elements
const removed = arr.splice(3, 2, '4', '5');
console.log(removed);
// => ['5', '6']
console.log(arr);
// => ['1', '2', '3', '4', '5']

// Remove 1 element at index 1
arr.splice(1, 1);
console.log(arr);
// => ['1', '3', '4', '5']
ordenar
De forma predeterminada, sort ordena los elementos de una matriz convirtiéndolos primero en cadenas y luego aplicando la comparación de cadenas (consulte Comparación de conceptos). La clasificación se realiza en el lugar, lo que significa que se modifica la matriz original. sort también devuelve esa matriz modificada, lo cual es conveniente si desea encadenarle otros métodos.

const arr = ['c', 'a', 'z', 'b'];
const result = arr.sort();
console.log(result);
// => ['a', 'b', 'c', 'z']
console.log(arr);
// => ['a', 'b', 'c', 'z']
Para personalizar el comportamiento de ordenación, puede pasar una función de comparación como argumento. La función de comparación en sí se llama con dos argumentos que son dos elementos de la matriz. A continuación, debe devolver lo siguiente:

un número negativo si el primer argumento debe ordenarse antes que el segundo
un número positivo si el primer argumento debe ordenarse después del segundo
0 si el orden de los elementos debe permanecer igual
Aquí hay un ejemplo de cómo usar una función de comparación personalizada que se puede usar para ordenar una matriz de objetos.

const arr = [
  { name: 'Lydia', age: 7 },
  { name: 'Anne', age: 34 },
  { name: 'Holger', age: 59 },
];

arr.sort((item1, item2) => {
  if (item1.name < item2.name) {
    return -1;
  }
  if (item1.name > item2.name) {
    return 1;
  }
  return 0;
});
// => [ { name: 'Anne', age: 34 }, { name: 'Holger', age: 59 },
// { name: 'Lydia', age: 7 } ]
Instrucciones
Elyse, futura maga, continúa su entrenamiento. Se le dará una baraja de cartas e intentará transformar esa baraja. Hará que ciertas cartas aparezcan, desaparezcan, cambien sus valores o se reorganicen por completo. Para facilitar las cosas, por lo general solo comienza con cartas numeradas del 1 al 10, aunque algunos de los trucos pueden resultar en la creación de cartas más grandes.

Tarea 1
Duplica cada tarjeta
Elyse quiere duplicar el número de cada carta de la baraja. Esto puede resultar en cartas más altas que 1-10.

const deck = [1, 2, 3, 4, 10];
seeingDouble(deck);
// => [2, 4, 6, 8, 20]

¿Estuco? Revelar pistas
Opens in a modal
Tarea 2
Crea múltiples copias de cada 3 que se encuentren en el mazo
Tarea 3
Encuentra dos cartas del centro exacto de la baraja
Tarea 4
Las dos cartas exteriores reaparecerán en el medio de la baraja
Tarea 5
Cada carta que no sea 2 desaparece
Tarea 6
Convierte una baraja barajada en una baraja perfectamente ordenada
Elyse desea demostrar su dominio para reordenar las cartas a la perfección, sin importar cuán bien barajadas.

const deck = [10, 1, 5, 3, 2, 8, 7];
perfectlyOrdered(deck);
// => [1, 2, 3, 5, 7, 8, 10]

¿Estuco? Revelar pistas
Opens in a modal
Tarea 7
Reordenar el mazo
Elyse quiere cambiar el orden de las cartas en el mazo. Después de la baza, la carta que está actualmente en la parte superior debería terminar en la parte inferior de la cubierta. La segunda carta debe terminar penúltima, etc.

const deck = [10, 1, 5, 3, 2];
reorder(deck);
// => [2, 3, 5, 1, 10]

*/

// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  const arr = deck.map(i => i * 2);
  return arr;
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  const arr = new Array();
  for (let i of deck) {
    if (i === 3) {
      for (let a = 0; a < 3; a++) arr.push(3)
    } else arr.push(i);
  }
  return arr;
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  const rest = Math.floor(deck.length / 2);
  const arr = new Array();

  arr.push(deck[rest - 1]);
  arr.push(deck[rest]);

  return arr;
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  const rest = Math.floor(deck.length / 2);

  const primerElemento = deck.at(0);
  const ultimoElemento = deck.at(-1);

  deck.splice(0, 1);
  deck.splice(-1, 1);

  // @ts-ignore
  deck.splice(rest - 1, 0, ultimoElemento);
  // @ts-ignore
  deck.splice(rest, 0, primerElemento);
  return deck;
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  const arr = deck.filter(i => i === 2);
  return arr;
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  // @ts-ignore
  const arr = deck.sort((a, b) => {
    if (b < a) return -1;
    if (b > a) return 1;
    if (b === a) return 0;
  })
  return arr;
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  const arr = deck.reverse();
  return arr;
}
