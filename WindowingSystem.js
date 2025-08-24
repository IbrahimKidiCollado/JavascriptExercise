/*
Instrucciones
En este ejercicio, simulará un sistema informático basado en ventanas. Creará algunas ventanas que se pueden mover y cambiar de tamaño. La siguiente imagen es representativa de los valores con los que trabajará a continuación.

				  <--------------------- screenSize.width --------------------->

	   ^          ┌────────────────────────────────────────────────────────────┐
	   |          │                                                            │
	   |          │         position.x, _                                      │
	   |          │         position.y   \                                     │
	   |          │                       \<----- size.width ----->            │
	   |          │                 ^      *──────────────────────┐            │
	   |          │                 |      │        title         │            │
	   |          │                 |      ├──────────────────────┤            │
screenSize.height │                 |      │                      │            │
	   |          │            size.height │                      │            │
	   |          │                 |      │       contents       │            │
	   |          │                 |      │                      │            │
	   |          │                 |      │                      │            │
	   |          │                 v      └──────────────────────┘            │
	   |          │                                                            │
	   |          │                                                            │
	   v          └────────────────────────────────────────────────────────────┘
📣 Para practicar su amplia gama de habilidades de JavaScript, intente resolver las tareas 1 y 2 con sintaxis de prototipo y las tareas restantes con sintaxis de clase.

Tarea 1
Definir tamaño para almacenar las dimensiones de la ventana
Defina una clase (función constructora) denominada Size. Debe tener dos campos width y height que almacenen las dimensiones actuales de la ventana. La función constructora debe aceptar valores iniciales para estos campos. El ancho se proporciona como primer parámetro, la altura como el segundo. El ancho y alto predeterminados deben ser 80 y 60, respectivamente.

Además, defina un método resize(newWidth, newHeight) que tome un nuevo ancho y alto como parámetros y cambie los campos para reflejar el nuevo tamaño.

const size = new Size(1080, 764);
size.width;
// => 1080
size.height;
// => 764

size.resize(1920, 1080);
size.width;
// => 1920
size.height;
// => 1080

¿Estuco? Revelar pistas
Opens in a modal
Tarea 2
Definir posición para almacenar una posición de ventana
Defina una clase (función constructora) denominada Posición con dos campos, x e y, que almacenan la posición horizontal y vertical actual, respectivamente, de la esquina superior izquierda de la ventana. La función constructora debe aceptar valores iniciales para estos campos. El valor de x se proporciona como primer parámetro, el valor de y como el segundo. El valor predeterminado debe ser 0 para ambos campos.

La posición (0, 0) es la esquina superior izquierda de la pantalla con valores de x que se hacen más grandes a medida que se mueve hacia la derecha e y valores que se hacen más grandes a medida que se desciende.

Defina también un método move(newX, newY) que tome nuevos parámetros x e y y cambie las propiedades para reflejar la nueva posición.

const point = new Position();
point.x;
// => 0
point.y;
// => 0

point.move(100, 200);
point.x;
// => 100
point.y;
// => 200

¿Estuco? Revelar pistas
Opens in a modal
Tarea 3
Definir una clase ProgramWindow
Defina una clase ProgramWindow con los siguientes campos:

screenSize: contiene un valor fijo de tipo Size con ancho 800 y alto 600
size : contiene un valor de tipo Size, el valor inicial es el valor predeterminado de la instancia de Size
position : tiene un valor de tipo Position, el valor inicial es el valor predeterminado de la instancia de Position
Cuando se abre (crea) la ventana, siempre tiene el tamaño y la posición predeterminados al principio.

const programWindow = new ProgramWindow();
programWindow.screenSize.width;
// => 800

// Similar for the other fields.
Nota al margen: El nombre ProgramWindow se usa en lugar de Window para diferenciar la clase de la ventana incorporada que existe en entornos de navegador.


¿Estuco? Revelar pistas
Opens in a modal
Tarea 4
Agregar un método para cambiar el tamaño de la ventana
La clase ProgramWindow debe incluir un cambio de tamaño del método. Debe aceptar un parámetro de tipo Size como entrada e intenta cambiar el tamaño de la ventana al tamaño especificado.

Sin embargo, el nuevo tamaño no puede superar ciertos límites.

La altura o anchura mínima permitida es 1. Las alturas o anchuras solicitadas inferiores a 1 se recortarán a 1.
La altura y el ancho máximos dependen de la posición actual de la ventana, los bordes de la ventana no pueden moverse más allá de los bordes de la pantalla. Los valores mayores que estos límites se recortarán al tamaño más grande que puedan tomar. Por ejemplo, si la posición de la ventana está en x = 400, y = 300 y se solicita un cambio de tamaño a altura = 400, ancho = 300, entonces la ventana se redimensionaría a altura = 300, ancho = 300 ya que la pantalla no es lo suficientemente grande en la dirección y para acomodar completamente la solicitud.
const programWindow = new ProgramWindow();

const newSize = new Size(600, 400);
programWindow.resize(newSize);
programWindow.size.width;
// => 600
programWindow.size.height;
// => 400

¿Estuco? Revelar pistas
Opens in a modal
Tarea 5
Agregar un método para mover la ventana
Además de la funcionalidad de cambio de tamaño, la clase ProgramWindow también debe incluir un movimiento de método. Debe aceptar un parámetro de tipo Position como entrada. El método move es similar a resize, sin embargo, este método ajusta el método posición de la ventana al valor solicitado, en lugar del tamaño.

Al igual que con el cambio de tamaño, la nueva posición no puede exceder ciertos límites.

La posición más pequeña es 0 tanto para x como para y.
La posición máxima en cualquier dirección depende del tamaño actual de la ventana. Los bordes no pueden moverse más allá de los bordes de la pantalla. Los valores mayores que estos límites se recortarán al tamaño más grande que puedan tomar. Por ejemplo, si el tamaño de la ventana está en x = 250, y = 100 y se solicita un movimiento a x = 600, y = 200, entonces la ventana se movería a x = 550, y = 200 ya que la pantalla no es lo suficientemente grande en la dirección x para acomodar completamente la solicitud.
const programWindow = new ProgramWindow();

const newPosition = new Position(50, 100);
programWindow.move(newPosition);
programWindow.position.x;
// => 50
programWindow.position.y;
// => 100

¿Estuco? Revelar pistas
Opens in a modal
Tarea 6
Cambiar una ventana de programa
Implemente una función changeWindow que acepte una instancia de ProgramWindow como entrada y cambie la ventana al tamaño y la posición especificados. La función debe devolver la instancia de ProgramWindow que se pasó después de aplicar los cambios.

La ventana debe tener un ancho de 400, una altura de 300 y colocarse en x = 100, y = 150.

const programWindow = new ProgramWindow();
changeWindow(programWindow);
programWindow.size.width;
// => 400

// Similar for the other fields.
*/

// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width, height) {
	if (width === undefined && this.width === undefined) this.width = 80;
	else this.width = width;
	if (height === undefined && this.height === undefined) this.height = 60;
	else this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
	this.width = newWidth;
	this.height = newHeight;
}

export function Position(x, y) {
	if (x === undefined && this.x === undefined) this.x = 0;
	else this.x = x;
	if (y === undefined && this.y === undefined) this.y = 0;
	else this.y = y;
}

Position.prototype.move = function (newX, newY) {
	this.x = newX;
	this.y = newY;
}

export function ProgramWindow() {
	this.screenSize = new Size(800, 600);
	this.size = new Size();
	this.position = new Position();
}

ProgramWindow.prototype.resize = function (newSize) {
	if (newSize instanceof Size) {
		const maxWidth = this.screenSize.width - this.position.x;
		const maxHeight = this.screenSize.height - this.position.y;

		this.size.width = Math.max(1, Math.min(newSize.width, maxWidth));
		this.size.height = Math.max(1, Math.min(newSize.height, maxHeight));

		if (this.size.height > this.size.width) {
			this.size.height = this.size.width;
		}
	}
}

ProgramWindow.prototype.move = function (newPosition) {
	if (newPosition instanceof Position) {

		const maxX = this.screenSize.width - this.size.width;
		const maxY = this.screenSize.height - this.size.height;

		this.position.x = Math.max(0, Math.min(newPosition.x, maxX));
		this.position.y = Math.max(0, Math.min(newPosition.y, maxY));
	}
}

export function changeWindow(p) {
	p.size.width = 400;
	p.size.height = 300;
	p.position.x = 100;
	p.position.y = 150;
	return p;
}

