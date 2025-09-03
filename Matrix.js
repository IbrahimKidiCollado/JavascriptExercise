/* Instrucciones
Dado una cadena que representa una matriz de números, devuelva las filas y columnas de esa matriz.

Así que, dado una cadena con nuevas líneas incrustadas como:

9 8 7
5 3 2
6 6 7
que representa esta matriz:

	1  2  3
  |---------
1 | 9  8  7
2 | 5  3  2
3 | 6  6  7
tu código debería poder mostrar:

Una lista de las filas, leyendo cada fila de izquierda a derecha mientras se mueve de arriba abajo a través de las filas,
Una lista de las columnas, leyendo cada columna de arriba abajo mientras se mueve de izquierda a derecha.
Las filas para nuestra matriz de ejemplo:

9, 8, 7
5, 3, 2
6, 6, 7
Y sus columnas:

9, 5, 6
8, 3, 6
7, 2, 7 */

export class Matrix {
	constructor(matrixString) {

		this._rows = matrixString
			.split('\n')
			.map(row =>
				row.split(' ')
					.filter(Boolean)
					.map(Number)
			);


		const maxColumns = Math.max(...this._rows.map(row => row.length));
		this._columns = Array.from({ length: maxColumns }, (_, colIndex) =>
			this._rows.map(row => row[colIndex] || undefined)
		);
	}

	get rows() {
		return this._rows;
	}

	get columns() {
		return this._columns;
	}
}