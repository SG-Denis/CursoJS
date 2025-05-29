// Ejemplo de .lenth()

/*
 const texto = 'Hola yo soy Denís'
 console.log(texto.length); 
*/

// Ejemplo .indexOf()
// const texto = 'Hola yo soy Denís';
// console.log(texto.indexOf('o'));
// console.log(texto.lastIndexOf('o')); 

// Ejemplo .SLICE()
const texto = 'Hola soy Denís! ';
const index =  texto.indexOf('Denís');
const lastIndex = texto.lastIndexOf('Denís');
// console.log(texto.slice(index)); // Corta desde el índice de 'Denís' hasta el final
console.log(texto.slice(10, 15)); 
console.log(texto.slice(-6, -1)); // Se puede usar números negativos para contar desde el final hacia el principio 

// Ejemplo .replace()
// const texto = 'Hola soy Denís!';
console.log(texto.replace('Denís', 'Denis')); // Reemplaza la primera ocurrencia de 'Denís' por 'Denis'

// Ejemplo de .split()
// const texto = 'Hola soy Denís!';
texto.split(' '); // Divide el texto en un array de palabras

// EJemplo de .toUpperCase() y .toLowerCase()
console.log(texto.toUpperCase()); // Convierte todo el texto a mayúsculas
console.log(texto.toLowerCase()); // Convierte todo el texto a minúsculas

