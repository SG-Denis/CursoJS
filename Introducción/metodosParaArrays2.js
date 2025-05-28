 // Ejemplos de .indexOf()
 const nombre = ['Denís', 'Mauro', 'Ezequiel', 'Alejo', 'Padua', 'Keoma', 'Alejo', 45];
console.log(nombres.indexOf('Rafael')); 

 // Ejemplos de .lastIndexOf() - Coges el último parámetro en vez del primero
 console.log(nombres.lastIndexOf('Rafael'));

// Ejemplos de .forEach()
nombres.forEach((nombre, index) => {
    console.log(`Hola ${nombre} (${index})`);
});

// Ejemplos de .find()
const resultado = nombres.find((nombre) => {
    if (nombre[0] == 'E') {
        return nombre;
    }
})
console.log(resultado);

// Ejemplos de .map()
const nombresMayusculas = nombres.map((nombre) => nombre.toUpperCase());
console.log(nombresMayusculas);

// Ejemplos de .filter()
const nombres4Letras = nombres.filter((nombre) => {
    if (nombre.length == 5) {
        return nombre;
        
    }
})
console.log(nombres4Letras);

// Ejemplos de .includes()
console.log(nombres.includes('Mauro')); // True
console.log(nombres.includes('Paulo')); // False

// Ejemplos de .every()
// const nombresValidos = nombres.every((nombre) => {
//     if (typeof nombre == 'string') {        
//         return true;
//     } else{
//         return false;
//     }
// })

// console.log('¿Todos los nombres son validos? ' + nombresValidos);

// Ejemplos de .some()
const nombresValidos = nombres.some((nombre) => {
    if (typeof nombre != 'string') {        
        return true;
    } else{
        return false;
    }
})

console.log('¿El array es válido? ' + nombresValidos);


// Ejemplos de .find()
// Ejemplos de .find()
// Ejemplos de .find()

// Ejemplos de .find()
