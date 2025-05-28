const colores = ['Rojo', 'Verde', 'Azul'];

// Ejemplo de .length()
console.log(colores.length);

// EJemplo de .toString()
document.body.innerHTML = colores.toString();

// Ejemplo de .join()
console.log(colores.join('- -'));

// Ejemplo de .sort()
const letras = ['c', 'b', 'd', 'a']
console.log(letras.sort());

const numeros = [3, 2, 4, 1]
console.log(numeros.sort());

// Ejemplo de .reverse
console.log(letras.reverse());
console.log(numero.reverse());

// Ejemplo de .concat()

const array1 = [1, 2, 3]
const array2 = ['A,', 'B', 'C']
const array3 = array1.concat(array2);

console.log(array3);

// Ejemplo de .push()

colores.push('Amarillo')
console.log(colores);

// Ejemplo de .pop()
colores.pop();
console.log(colores);

// Ejemplo de .shift()
const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
console.log(dias);
// const diaEliminado = dias.shift();
// console.log(diaEliminado);

// Ejemplo de .unshift()
dias.unshift('Denís')
console.log(dias);

// Ejemplo de .splice()
const amigos = ['Ezequiel', 'Mateo', 'Mauro'];
amigos.splice(0, 0, 'Alejo', 'Padua');
console.log(amigos);

// Ejemplo de .slice()
const frutas = ['Fresa', 'Manzana', 'Uva', 'Piña', 'Mango', 'Naranja', 'Melón']
const frutasFavoritas = frutas.slice(1, 5)
console.log(frutasFavoritas);