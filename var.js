// Entendiendo la bestia 'var' en JS

// Asignacion de la variable (declaracion)
// --- Utilizamos la palabra reservada *var*
var nombre = 'Christian';
console.log(nombre) //Christian


// "var" no tiene alcance "visibilidad" de bloque
// Las variables declaradas con "var" pueden tener a la funcion como entorno de visibilidad.
// o bien ser globales
// Su visibilidad atraviesa los bloques
if(true){
	var test = true
}

console.log(test) //test

// Lo mismo pasan con ciclos 'For' ---------------------


// "var" totela redeclaraciones
var user = 'Chrsitian';
var user = 'Andres';
console.log(user); //Andres

// Si declaramos la variable 'user' con 'let' nos generaria un error en la compilacion


// Todas las variables que sean declaradas con 'var'
// Se les aplica hoisting ('elevamiento')
// Quiere decir: No importa donde se declaren simpre su declaracion ("no las asignaciones") se moveran a la parte de arriba

function sayHi() {
	phrase = 'Hello';
	
	if(false){
		var phrase;
	}
	
	console.log(phrase)
}

sayHi()

