/**
Introducción
Errores
Los errores son útiles para informar cuando algo está mal o es inesperado en un programa o fragmento de código.

Son objetos javascript.

La propiedad principal de este objeto es message:

const error = new Error('Oops, something went wrong');

console.log(error.message);
// => "Oops, something went wrong"
Con la sintaxis throw, puede generar un error.

throw new Error('Oops');
Cuando se produce un error, la ejecución actual se detiene y se reanuda en el primer bloque catch de la pila de llamadas.

try {
  throw new Error('Oops');
} catch (error) {
  console.log(error.message);
  // => "Oops"
}
Herencia
La herencia es una forma de crear relaciones padre-hijo entre clases. La clase secundaria (a veces denominada subclase) tiene acceso al comportamiento y los datos definidos por la clase principal (a veces denominada superclase).

class Pet {
  constructor(name) {
	this.name = name;
  }

  introduce() {
	console.log(`This is my pet, ${this.name}.`);
  }
}

class Dog extends Pet {}

const dog = new Dog('Otis');
dog.introduce();
// => This is my pet, Otis.
La palabra clave extends de la declaración de clase secundaria establece una relación con la clase primaria a través de la cadena de prototipos.

Los objetos creados por el constructor del hijo tendrán el prototipo de la clase padre en su cadena de prototipos, proporcionando acceso a cualquier método o dato definido por el padre.

const dog = new Dog('Otis');

Dog.prototype.isPrototypeOf(dog); // => true
Pet.prototype.isPrototypeOf(dog); // => true
Pet.prototype.isPrototypeOf(Dog.prototype); // => true

Pet.prototype.hasOwnProperty('introduce'); // => true
Dog.prototype.hasOwnProperty('introduce'); // => false
dog.hasOwnProperty('introduce'); // => false
Al igual que con cualquier clase en JavaScript, las subclases pueden heredar de Error para crear errores personalizados mediante la palabra clave extends. La sintaxis instanceof verificará si el error detectado es una instancia de una subclase particular de Error.

class CustomError extends Error {}

try {
  // ... Code that may throw an error
} catch (error) {
	if (error instanceof CustomError) {
	console.log('The error thrown is an instance of the CustomError');
}
}
Instrucciones
Elena es la nueva responsable de calidad de una fábrica de periódicos. Como acaba de llegar a la empresa, ha decidido revisar algunos de los procesos de la fábrica para ver qué se podía mejorar. Descubrió que los técnicos están haciendo muchos controles de calidad a mano. Ella ve que hay una buena oportunidad para la automatización y le pide a usted, un desarrollador independiente, que desarrolle un software para monitorear algunas de las máquinas.

Tarea 1
Controla el nivel de humedad de la habitación
Su primera misión es escribir un software para monitorear el nivel de humedad de la sala de producción. Ya existe un sensor conectado al software de la empresa que devuelve periódicamente el porcentaje de humedad de la habitación.

Debe implementar una función en el software que arroje un error si el porcentaje de humedad es demasiado alto. La función debe llamarse checkMoistureLevel y tomar el porcentaje de humedad como parámetro.

Debe arrojar un error (el mensaje no es importante) si el porcentaje supera el 70%.

checkHumidityLevel(60);
// => undefined
checkHumidityLevel(100);
// Throws an error

¿Estuco? Revelar pistas
Opens in a modal
Tarea 2
Detecta el sobrecalentamiento
Tarea 3
Supervisar la máquina
Ahora que su máquina puede detectar errores, implementará una función que reaccione a esos errores de diferentes maneras:

Si el sensor está roto, debe advertir a un técnico
Si la temperatura es demasiado alta, apagará la máquina si la temperatura supera los 600 °C o encenderá una luz de advertencia si es inferior a eso.
Si ocurre otro error, lo volverá a lanzar.
Implementa una función monitorTheMachine que realiza acciones de argumento.

actions es un objeto que tiene 4 propiedades:

propiedad	descripción
check	una función. Comprueba la temperatura de la máquina. Puede arrojar varios errores.
alertDeadSensor	una función. Alerta a un técnico de que el sensor de temperatura está muerto.
alertOverheating	una función. Encenderá una luz de advertencia en la máquina.
shutdown	una función. Apagará la máquina.
La función monitorTheMachine(actions) debe llamar internamente a check(). Si eso pasa, la función no debería devolver nada. Si eso arrojaun error, se espera un comportamiento diferente:

excepción	Comportamiento esperado
ArgumentError	llame a la función alertDeadSensor.
OverheatingError	Ejecute el protocolo de sobrecalentamiento.
(cualquier otra cosa)	Volver a lanzar el error
Protocolo de sobrecalentamiento Si la temperatura es inferior a 600 °C, encienda la luz de advertencia llamando al alertaFunción de sobrecalentamiento. Si la temperatura supera los 600 °C, la situación es crítica, así que llame al apagado función.

monitorTheMachine({
	check,
	alertDeadSensor,
	alertOverheating,
	shutdown,
});
 */


// @ts-check

export class ArgumentError extends Error {
}

export class OverheatingError extends Error {
	constructor(temperature) {
		super(`The temperature is ${temperature} ! Overheating !`);
		this.temperature = temperature;
	}

	argumentError() {
		throw new Error("The sensor is broke")
	}
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
export function checkHumidityLevel(humidityPercentage) {
	if (humidityPercentage > 70) throw new OverheatingError(humidityPercentage)
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
export function reportOverheating(temperature) {
	// @ts-ignore
	if (temperature > 500) throw new OverheatingError(temperature);
	if (temperature === null) throw new ArgumentError();
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine(actions) {
	try {
		const error = actions.check();
		if (error > 500) throw new OverheatingError(error)
	} catch (error) {
		if (error instanceof ArgumentError) actions.alertDeadSensor();
		else if (error instanceof OverheatingError) {
			if (error.temperature < 600) actions.alertOverheating();
			else actions.shutdown();
		} else actions.check();

	}
}
