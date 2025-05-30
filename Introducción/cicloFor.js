const nombres = ['Juan', 'Ana', 'Pedro', 'Luisa'];
nombres.forEach((nombre) => {
  console.log(nombre);
});

// Ejemplo de ciclo for - Repito un bloque de código mientras se cumpla una condición

for (let numero = 0; numero < 101; numero++) {
  // Aquí puedes realizar cualquier operación con el número
    console.log(numero);
}

for (let numero = 50; numero > 0; numero--) { // A la inversa
    console.log(numero);
}

for (let numero = 0; numero < nombres.length; numero++) {
    console.log(nombres[numero]); // Accedo al elemento del array por su índice
}