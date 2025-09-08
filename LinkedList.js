/* Introducción
Estás trabajando en un proyecto para desarrollar un sistema de programación de trenes para una red ferroviaria concurrida.

Te han pedido que desarrolles un prototipo para las rutas de trenes en el sistema de programación. Cada ruta consiste en una secuencia de estaciones de tren que un tren dado para detenerse.

Instrucciones
Tu equipo ha decidido usar una lista enlazada doble para representar cada ruta de tren en el horario. Cada estación a lo largo de la ruta del tren se representará por un nodo en la lista enlazada.

No necesitas preocuparte por las horas de llegada y partida en las estaciones. Cada estación se representará simplemente por un número.

Las rutas pueden extenderse, añadiendo estaciones al principio o al final de la ruta. También pueden acortarse eliminando estaciones del principio o del final de la ruta.

A veces una estación cierra y en ese caso la estación debe eliminarse de la ruta, incluso si no está al principio o al final de la ruta.

El tamaño de una ruta se mide no por la distancia que recorre el tren, sino por el número de estaciones en las que se detiene. */

//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
	constructor() {
		this.list = [];
	}

	push(num) {
		this.list.push(num);
	}

	pop() {
		return this.list.pop();
	}

	shift() {
		return this.list.shift();
	}

	unshift(num) {
		this.list.splice(0, 0, num);
	}

	delete(num) {
		if (this.list.includes(num)) {
			this.list.splice(this.list.indexOf(num), 1)
		}
	}

	count() {
		return this.list.length;
	}
}
