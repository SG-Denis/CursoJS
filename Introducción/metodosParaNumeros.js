// Ejemplo de .toString()
const numero = 10;
console.log(numero, typeof numero); // Muestra el número y su tipo

const texto = numero.toString(); // Convierte el número a texto
console.log(texto, typeof texto); // Muestra el texto y su tipo

// Ejemplo de .toFixed()
const decimal = 3.1415;
console.log(decimal.toFixed(2)); // Redondea el número a 2 decimales


// Ejemplo de parseInt() "No lleva punto al principio ya que es una función"
const numero1 = parseInt(prompt('Escribe un número:'));
const numero2 = parseInt(prompt('Escribe otro número:'));
console.log(numero1 + numero2); // Suma los números como texto

// Ejemplo de parseFloat() - Para trabakajar con decimales
const numero3 = parseFloat(prompt('Escribe un número:'));
const numero4 = parseFloat(prompt('Escribe otro número:'));
console.log(numero1 + numero2); // Suma los números como texto

// Ejemplo de Math.random()
const numeroAleatorio = Math.random(); // Genera un número aleatorio entre 0 y 1
console.log(numeroAleatorio); // Muestra el número aleatorio

// Ejemplo de Math.floor()
console.log(Math.floor('10.1')); // Redondea hacia abajo el número a 10
console.log(Math.floor('10.99')); // Redondea hacia abajo el número a 10

// Ejemplo de Math.ceil()
console.log(Math.ceil('10.1')); // Redondea hacia arriba el número a 11
console.log(Math.ceil('10.99')); // Redondea hacia arriba el número a 11

// Ejemplo de Math.round()
console.log(Math.round('10.1')); // Redondea el número a 10
console.log(Math.round('10.99')); // Redondea el número a 11

// EJemplo de número aleatorio entre 0 y 100
const numeroAleatorio100 = Math.random(); 
console.log(Math.floor(numeroAleatorio100 * 101)); // Genera un número aleatorio entre 0 y 100