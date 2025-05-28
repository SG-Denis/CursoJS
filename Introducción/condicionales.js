// Estructura de una condicional
// if (true) {
// Código a ejecutar
// }

// Ejemplo #1
const usuario = {
    edad: 27,
    pais: 'España',
    ticket: true
}

if (usuario.edad > 17) {
    console.log('El usuario es mayor de edad, puede entrar al concierto');
} else {
    console.log('El usuario es menor, no puede entrar al concierto');
}

// Ejemplo #2
if (usuario.edad >= 18 && usuario.ticket) { // Condicional + AND (&&)
    console.log('El usuario es mayor de edad y tiene ticket.');
} else {
    console.log('El usuario es menor de edad o no tiene ticket'); // Con que no se cumpla 1 de las 2, ya da false
}

// Ejemplo #3

if (usuario.edad >= 18) {
    if (usuario.ticket) {
    console.log('El usuario es mayor de edad, puede entrar al concierto');
    } else {
            console.log('El usuario es mayor de edad, pero no tiene ticket');
    }
} else {
    console.log('El usuario es menor, no puede entrar al concierto');
}

// Ejemplo #4

if (usuario.pais == 'España') {
    console.log('El usuario es Español');
} else if (usuario.pais == 'Portugal') { // Uso del else if para establecer otra condicion
    console.log('El usuario es Portugés');
} else {
    console.log('El usuario es de México');
}