// Hoisting: En españo 'Elevacion'

// En javaScript las variables ofuciones se mueben al principio de su scope
// o ambito

// Sucede con las variables declaradas con 'var', funciones o importaciones


// 'var' se eleva la declaracion mas no la asignacion.

saludar('hello'); //I Hola en ingles es: Hello
function saludar(saludo) {
	console.log('Hola en ingles es:' , saludo)
}