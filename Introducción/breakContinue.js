const nombres = ['Juan', 'Ana', 'Pedro', 'Luisa'];

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i][0] !== A) {
        console.log('Aviso - El nombre no empieza con A');
        console.log(nombres[i]); // Muestra el nombre aunque no empiece con 'A
        break; // Sale del bucle si el nombre no empieza con 'A'
        
    }
    console.log(nombres[i]); // Muestra el nombre si empieza con 'A'
}


// Continue
const invitados = ['Juan', 'Ana', 'Pedro', 'Luisa'];
console.log('Lista de personas aceptadas:');

for (let i = 0; i < invitados.length; i++) {
    if (invitados[i] == 'Pedro') {
        console.log('Aviso - Pedro no está invitado'); // Muestra un aviso si el nombre es 'Pedro'
        continue; // Salta al siguiente ciclo del bucle sin mostrar 'Pedro'
    }
    console.log(invitados[i]); // Muestra el nombre del invitado
}